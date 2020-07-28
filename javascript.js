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
fetch(
  "http://newsapi.org/v2/everything?q=apple&from=2020-07-27&to=2020-07-27&sortBy=popularity&apiKey=f5ee3dafb98944c29910f52c8b8d939a"
)
  .then((resp) => resp.json()) // json convert
  .then(function (data) {
    console.log(data);
  });
