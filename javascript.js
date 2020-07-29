var input = document.querySelector("#input");

var addTask = document.querySelector("#addTask");
var todo = document.querySelector("#todo");
var completed = document.querySelector("#completed");
var sound = document.querySelector("#playMusic");

addTask.onclick = function () {
  var userInput = input.value;
  var div = document.createElement("div");
  var p = document.createElement("p");
  var btn = document.createElement("btn");

  btn.textContent = "Done";
  p.textContent = userInput;

  div.appendChild(p);
  div.appendChild(btn);

  //   formatting of the code
  div.setAttribute("class", "row");
  p.setAttribute("class", "col-sm-9");
  btn.setAttribute("class", "btn btn-info col-sm-3");

  btn.onclick = (event) => {
    music();
    createCompleted(userInput);
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  };
  input.textContent = "";

  todo.appendChild(div);
};

function music() {
  sound.play();
}

function createCompleted(input) {
  var p = document.createElement("p");
  var btn = document.createElement("btn");
  var div = document.createElement("div");
  p.textContent = input;
  btn.textContent = "Delete";

  div.appendChild(p);
  div.appendChild(btn);
  div.setAttribute("class", "row");
  p.setAttribute("class", "col-sm-9");
  btn.setAttribute("class", "btn btn-danger col-sm-3");
  btn.onclick = (event) => {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  };

  completed.appendChild(div);
}

// APIs

// Geolocation for watching live location of us

var btnCoordinates = document.querySelector("#coordinates");
var latitude = document.querySelector("#latitude");
var longitude = document.querySelector("#longitude");

btnCoordinates.onclick = getLocation();

function getLocation() {
    if(latitude.textContent == ""){
        alert("Allow location or update browser");
    }
  function success(position) {

    var coordinates = position.coords;
    latitude.textContent = `Latitude : ${coordinates.latitude}`;
    longitude.textContent = `Longitude: ${coordinates.longitude}`;
  }

  function error(error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error);
}
