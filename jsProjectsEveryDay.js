/*--================================================--*\
                        -- header --                     
\*--================================================--*/
// Select the header element in the DOM
const header = document.querySelector("header");

// Set the initial checkpoint value
let checkpoint = 0;

// Function to toggle header visibility based on scroll direction
function toggleHeaderVisibility() {
  const scrollY = window.scrollY;

  // Check if the scroll position is less than the checkpoint
  if (scrollY < checkpoint) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }

  // Update the checkpoint to the nearest multiple of 10 based on the current scroll position
  checkpoint = Math.floor(scrollY / 10) * 10;
}

// Add a throttled scroll event listener to the window
window.addEventListener("scroll", throttle(toggleHeaderVisibility, 200));

// Throttle function to limit the frequency of scroll events
function throttle(callback, delay) {
  let lastCall = 0;

  return function () {
    const now = new Date().getTime();

    if (now - lastCall >= delay) {
      callback.apply(null, arguments);
      lastCall = now;
    }
  };
}

/*--================================================--*\
                        -- project 01 --                     
\*--================================================--*/
let projectOneElements = document.querySelectorAll(
  "#projectOne .container .panel"
);

function panelReduce(projectOneElements) {
  for (const elements of Array.from(projectOneElements)) {
  }
}
panelReduce(projectOneElements);
function xMatch(x) {
  if (x.matches) {
    document.body.style.background = "red";
  } else {
    document.body.style.background = "white";
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 700px)");

xMatch(x);
x.addEventListener("change", function () {
  xMatch(x);
});

projectOneElements.forEach(function (element, idx, nodeList) {
  element.onclick = function () {
    projectOneElements.forEach(function (element) {
      element.classList.remove("active");
    });
    this.classList.add("active");
  };
});

/*--================================================--*\
- do a list of dinamically hidden element in small screens  
                      project two
\*--================================================--*/
let next = document.querySelector("#projectTwo .btns .next");
let prev = document.querySelector("#projectTwo .btns .prev");
let nums = document.querySelectorAll("#projectTwo ul li");

let step = 0;

next.onclick = function () {
  step < 3 ? step++ : step;
  nums.forEach(function (element, indx, arr) {
    if (indx <= step) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
  if (step == 3) {
    next.classList.remove("active");
    prev.classList.add("active");
  } else {
    prev.classList.add("active");
    next.classList.add("active");
  }
};
prev.onclick = function () {
  step > 0 ? step-- : step;
  nums.forEach(function (element, indx, arr) {
    if (indx <= step) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
  if (step == 0) {
    prev.classList.remove("active");
    next.classList.add("active");
  } else {
    prev.classList.add("active");
    next.classList.add("active");
  }
};

/*--================================================--*\
                        -- project three --             
\*--================================================--*/

let projectThreeLeft = document.querySelector("#projectThree .left");
let projectThreeRight = document.querySelector("#projectThree .right");
let projectThreeContainer = document.querySelector(
  "#projectThree .main.container"
);

projectThreeLeft.addEventListener("mouseenter", function () {
  projectThreeContainer.classList.add("hover-left");
});
projectThreeLeft.addEventListener("mouseleave", function () {
  projectThreeContainer.classList.remove("hover-left");
});
projectThreeRight.addEventListener("mouseenter", function () {
  projectThreeContainer.classList.add("hover-right");
});
projectThreeRight.addEventListener("mouseleave", function () {
  projectThreeContainer.classList.remove("hover-right");
});

/*--================================================--*\
                        -- project Four --                     
\*--================================================--*/

// read the keys of the keyboard
let keys = document.querySelectorAll("#projectFour .insert .key");

window.addEventListener("keydown", (event) => {
  keys[0].innerHTML = `${
    event.key === " " ? "space" : event.key
  } <small>event.key</small>`;
  keys[1].innerHTML = `${event.keyCode} <small>event.keyCode</small>`;
  keys[2].innerHTML = `${event.code} <small>event.code</small>`;
  if (keys[0].parentElement.classList.contains("hidden")) {
    keys[0].parentElement.classList.remove("hidden");
    keys[0].parentElement.classList.add("show");
  }
});

/*--================================================--*\
                        -- project five --                     
\*--================================================--*/
let drkbtn = document.querySelector("#projectFive .button");
let container = document.querySelector("#projectFive .container.main");
drkbtn.addEventListener("click", function () {
  container.classList.toggle("dark");
  if (container.classList.contains("dark")) {
    drkbtn.value = "Light mode";
  } else {
    drkbtn.value = "Dark mode";
  }
});
let time = document.querySelector("#projectFive .container.main .time");
let day = document.querySelector("#projectFive .container.main .day");
let needleSec = document.querySelector(
  "#projectFive .container.main .needle.seconds"
);
let needleMin = document.querySelector(
  "#projectFive .container.main .needle.minutes"
);
let needleHou = document.querySelector(
  "#projectFive .container.main .needle.hours"
);
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();
let dayNum = date.getDay();

let tme =
  date.getHours() >= 12
    ? `${date.getHours() % 12}:${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      } PM`
    : `${date.getHours() % 12}:${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      } AM`;
time.textContent = tme;
day.innerHTML = `${daysOfWeek[dayNum]}, ${date
  .toString()
  .split(" ")[1]
  .toUpperCase()} <span class="num">${date.getDate()}</span>`;
window.onload = function () {
  needleSec.style.transform = `rotate(${6 * date.getSeconds()}deg)`;
  needleMin.style.transform = `rotate(${6 * date.getMinutes()}deg)`;
  needleHou.style.transform = `rotate(${30 * (date.getHours() % 12)}deg)`;
};
setInterval(() => {
  date = new Date();
  let tme =
    date.getHours() >= 12
      ? `${date.getHours() % 12}:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        } PM`
      : `${date.getHours() % 12}:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        } AM`;
  time.textContent = tme;
  day.innerHTML = `${daysOfWeek[dayNum]}, ${date
    .toString()
    .split(" ")[1]
    .toUpperCase()} <span class="num">${date.getDate()}</span>`;
  needleSec.style.transform = `rotate(${6 * date.getSeconds()}deg)`;
  needleMin.style.transform = `rotate(${6 * date.getMinutes()}deg)`;
  needleHou.style.transform = `rotate(${30 * (date.getHours() % 12)}deg)`;
}, 1000);

/*--================================================--*\
                        -- project six --                     
\*--================================================--*/

let input = document.querySelector("#projectSix .input");
let submit = document.querySelector("#projectSix .add");
let tasksDiv = document.querySelector("#projectSix .tasks");

let arrElements = [];

function creatElement(value) {
  let date = new Date();
  let el = document.createElement("div");
  el.setAttribute("id", date.getTime());
  el.classList.add("task");
  el.innerHTML = `${value}<span>delete</span>`;
  return el;
}

window.addEventListener("load", () => {
  arrElements = JSON.parse(window.localStorage.getItem("elements"));
  for (element in arrElements) {
    const el = creatElement(arrElements[element].value);
    el.setAttribute("id", arrElements[element].id);
    if (arrElements[element].done) {
      el.classList.add("done");
    }
    tasksDiv.appendChild(el);
  }
});

function updatedLocal() {
  arrElements = [];
  Array.from(tasksDiv.children).forEach((e) => {
    let temp = {
      id: e.getAttribute("id"),
      value: e.textContent.replace("delete", ""),
      done: e.classList.contains("done"),
    };
    arrElements.push(temp);
  });
  window.localStorage.setItem("elements", JSON.stringify(arrElements));
}

submit.addEventListener("click", function () {
  if (input.value !== "") {
    let e = creatElement(input.value);
    tasksDiv.appendChild(e);
    input.value = "";
    updatedLocal();
  }
});

tasksDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("task")) {
    event.target.classList.toggle("done");
    updatedLocal();
  }
});

tasksDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("task")) {
    if (!event.target.classList.contains("done")) {
      event.target.classList.value = "task";
    } else {
      event.target.classList.value = "task done";
    }
    updatedLocal();
  }
});

tasksDiv.addEventListener("click", function (event) {
  if (
    event.target.tagName == "span" ||
    event.target.parentElement.classList.contains("task")
  ) {
    event.target.parentElement.remove();
    updatedLocal();
  }
});

/*--================================================--*\
                        -- project Seven --                     
\*--================================================--*/

// Get Slider items
let sliderImages = Array.from(
  document.querySelectorAll("#projectSeven .slider-container img")
);

// get Slider number
var slidesCount = sliderImages.length;

// set Current Slide
var currentSlide = 1;

// slide number element
var slideNUmberElement = document.getElementById("slide-number");

// next and previous element
let nextButton = document.querySelector("#projectSeven .slider-controls #next");
let prevButton = document.querySelector("#projectSeven .slider-controls #prev");

// clicking the button events
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// creating the Main Ul element
let paginationElement = document.createElement("ul");

// set the ID on the created element
paginationElement.setAttribute("id", "pagination-ul");

// create the pagination Bullets
for (let i = 1; i <= slidesCount; i++) {
  // create the LI element
  let paginationBullet = document.createElement("li");

  // set the data-index
  paginationBullet.setAttribute("data-index", i);

  // set the content of the bullet
  paginationBullet.appendChild(document.createTextNode(i));

  // append the bullet to the UL element
  paginationElement.appendChild(paginationBullet);
}
// get the slider controls container
let sliderControls = document.querySelector(
  "#projectSeven .slider-controls .indicators"
);

// adding the UL to the Slider Cntrl
sliderControls.appendChild(paginationElement);

// get the Slider bullets
let paginationBullets = Array.from(
  document.querySelectorAll("#projectSeven .slider-controls #pagination-ul li")
);

check();

// check function
function check() {
  // get the slide Number element
  slideNUmberElement.textContent = `# Slide ${currentSlide} of ${slidesCount} `;

  // remove the active from the elements
  desactiveSlider();

  // put active in the bullets and image element
  paginationBullets[currentSlide - 1].classList.add("active");
  sliderImages[currentSlide - 1].classList.add("active");

  // the buttons disabled cases
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
    nextButton.classList.remove("disabled");
  } else if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
    prevButton.classList.remove("disabled");
  } else {
    nextButton.classList.remove("disabled");
    prevButton.classList.remove("disabled");
  }
}

// remove the active from the slider elements
function desactiveSlider() {
  paginationBullets.forEach((ele) => {
    if (ele.classList.contains("active")) {
      ele.classList.remove("active");
    }
  });
  sliderImages.forEach((ele) => {
    if (ele.classList.contains("active")) {
      ele.classList.remove("active");
    }
  });
}

function nextSlide() {
  if (!nextButton.classList.contains("disabled")) {
    currentSlide++;
    check();
  }
}
function prevSlide() {
  if (!prevButton.classList.contains("disabled")) {
    currentSlide--;
    check();
  }
}

paginationBullets.forEach((bullet) => {
  bullet.onclick = () => {
    currentSlide = parseInt(bullet.getAttribute("data-index"));
    check();
  };
});

/*--================================================--*\
                        -- project eight --                     
\*--================================================--*/

let faqs = Array.from(document.querySelectorAll("#projectEight .faq"));

faqs.forEach((faq) => {
  faq.querySelector("button").onclick = () => {
    if (faq.classList.contains("show")) {
      faq.classList.remove("show");
      faq.classList.add("hide");
    } else if (faq.classList.contains("hide")) {
      faq.classList.remove("hide");
      faq.classList.add("show");
    }
  };
});

/*--================================================--*\
                        -- project Nine --                     
\*--================================================--*/

let dragged;

let fill = document.querySelector("#projectNine .fill");
let empty = document.querySelectorAll("#projectNine .empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const box of empty) {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("drop", drop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}
function dragEnd() {
  this.className = "fill";
}

function dragEnter() {
  this.classList.add("hovered");
}
function dragLeave() {
  this.classList.remove("hovered");
}
function dragOver(e) {
  e.preventDefault();
}
function drop(e) {
  this.className = "empty";
  this.append(fill);
}

/*--================================================--*\
                        -- project Eleven --                     
\*--================================================--*/

// get all the small cups
let smallCups = Array.from(
  document.querySelectorAll("#projectEleven .small-cup")
);

// get the big cup
let bigCup = document.querySelector("#projectEleven .cup");

// the current small cup that we clicked on
let currentCup = 0;

checkCups();

// function of change the state of the cups
function checkCups() {
  for (const cup of smallCups) {
    cup.classList.remove("full");
  }
  for (let index = 0; index < currentCup; index++) {
    smallCups[index].classList.add("full");
  }
  bigCup.querySelector(".remained").style.height = `${
    100 - currentCup * 12.5
  }%`;
  bigCup.querySelector(".remained").innerHTML = `<h3>${
    2 - currentCup * 0.25
  }L</h3><span>remained</span>`;
  bigCup.querySelector(".filled").style.height = `${currentCup * 12.5}%`;
  if (currentCup != 0) {
    bigCup.querySelector(".filled").innerHTML = `${12.5 * currentCup}%`;
  } else {
    bigCup.querySelector(".filled").innerHTML = ``;
  }
}

// add click event to small cups
for (const cup of smallCups) {
  cup.addEventListener("click", () => {
    if (
      smallCups.indexOf(cup) == 0 &&
      cup.classList.contains("full") &&
      !cup.nextElementSibling.classList.contains("full")
    ) {
      currentCup = 0;
      checkCups();
    } else if (
      !smallCups.indexOf(cup) == 0 &&
      cup.classList.contains("full") &&
      !cup.nextElementSibling.classList.contains("full")
    ) {
      currentCup--;
      checkCups();
    } else {
      currentCup = smallCups.indexOf(cup) + 1;
      checkCups();
    }
  });
}

/*--================================================--*\
                        -- project twelve --                     
\*--================================================--*/

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
let squaresContainer = document.querySelector("#projectTwelve .box");

for (let i = 0; i < 400; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  squaresContainer.append(square);
}

let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseenter", squareEnter);
  square.addEventListener("mouseleave", squareLeave);
});

function randomColor() {
  return colors[Math.floor(Math.random() * 5)];
}

function squareEnter() {
  let random = randomColor();
  this.style.background = random;
  this.style.boxShadow = ` 0 0 2px ${random},  0 0 10px ${random}`;
}
function squareLeave() {
  this.style.background = "#1d1d1d";
  this.style.boxShadow = " 0 0 2px #000";
}

/*--================================================--*\
                        -- project thirteen --                     
\*--================================================--*/

let ripple = document.querySelector("#projectThirteen .ripple");

ripple.onclick = function (e) {
  // defining the position of click within the element
  let rect = ripple.getBoundingClientRect();
  let left = e.clientX - rect.left;
  let top = e.clientY - rect.top;

  //!!! another way to do it
  /* 
    const x = e.pageX;
    const y = e.pageY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

  
  */

  // get the circle element
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.left = left + "px";
  circle.style.top = top + "px";

  // adding the elemnt
  ripple.append(circle);

  // deleting the element after doing the effect
  setTimeout(() => {
    circle.remove();
  }, 500);
};

/*--================================================--*\
                        -- Project fourteen --                     
\*--================================================--*/

const gameSpeed = 100;
const canvasBorderColour = "black";
const canvasBackgroundColour = "white";
const snakeColour = "lightgreen";
const snakeBorderColour = "darkgreen";
const foodColour = "red";
const foodBorderColour = "darkred";

let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 },
];

// The user's score
let score = 0;
// when set to true the snake is changing direction
let changingDirection = false;
// food x-coordinate and y-coordinate
let food = { x: 0, y: 0 };
// Horizontal velocity
let dx = 0;
// Vertical velocity
let dy = -10;

// Get the canvas element
const gameCanvas = document.getElementById("gameCanvas");
// Return a two dimensional drawing context
const ctx = gameCanvas.getContext("2d");
// get reset
const resetCanvaGame = document.querySelector("#projectFourteen .reset");

function clearCanvas() {
  ctx.fillStyle = canvasBackgroundColour;
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  ctx.strokeStyle = canvasBorderColour;
  ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function draw() {
  for (const key in snake) {
    ctx.fillStyle = snakeColour;
    ctx.strokeStyle = snakeBorderColour;
    ctx.fillRect(snake[key].x, snake[key].y, 10, 10);
    ctx.strokeRect(snake[key].x, snake[key].y, 10, 10);
  }
}

function randomCordinates(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function drawFood() {
  ctx.fillStyle = foodColour;
  ctx.strokeStyle = foodBorderColour;
  ctx.fillRect(food.x, food.y, 10, 10);
  ctx.strokeRect(food.x, food.y, 10, 10);
}

// make a function to define random ordinates for the food
function changeDirection(event) {
  const leftKey = 37;
  const upKey = 38;
  const rightKey = 39;
  const downKey = 40;

  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (keyPressed === upKey && !goingDown) {
    dx = 0;
    dy = -10;
  }

  if (keyPressed === rightKey && !goingLeft) {
    dx = 10;
    dy = 0;
  }

  if (keyPressed === leftKey && !goingRight) {
    dx = -10;
    dy = 0;
  }

  if (keyPressed === downKey && !goingUp) {
    dx = 0;
    dy = 10;
  }
}

function advanceSnake() {
  let top = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(top);
  if (top.x === food.x && top.y === food.y) {
    return;
  } else {
    snake.pop();
  }
}

function createFood() {
  food.x = randomCordinates(0, gameCanvas.width - 10);
  food.y = randomCordinates(0, gameCanvas.height - 10);
}

function collidAndEnd() {
  snake.forEach(function (part, indx) {
    if (part.x === food.x && part.y === food.y) {
      createFood();
    }
    let collid = false;
    if (indx > 3) {
      collid = part.x === snake[0].x && part.y === snake[0].y;
    }
    let end =
      snake[0].x < 0 ||
      snake[0].y < 0 ||
      snake[0].x > gameCanvas.width - 10 ||
      snake[0].y > gameCanvas.height - 10 ||
      collid;
    if (end) {
      clearInterval(startSnakeGame);
    }
  });
}
function main() {
  clearCanvas();
  drawFood();
  draw();
  advanceSnake();
  collidAndEnd();
}

// Create the first food location
createFood();
// Call changeDirection whenever a key is pressed
document.addEventListener("keydown", changeDirection);

let startSnakeGame = setInterval(main, 100);
// start the game
resetCanvaGame.addEventListener("click", () => {
  snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 },
  ];
  dx = 0;
  dy = -10;
  createFood();
  startSnakeGame = setInterval(main, 100);
});

/*--================================================--*\
                        -- project fifteen --                     
\*--================================================--*/

let textEl = document.querySelector("#projectFifteen .text");
let speedEl = document.querySelector("#projectFifteen .speed");
let text = "My Name is Djaber and I Love Programming!";

let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.textContent = text.slice(0, idx);
  idx++;

  if (idx > text.length) idx = 1;

  textEl.classList.toggle("bare");
  setTimeout(writeText, speed);
}

speedEl.addEventListener("change", () => {
  speed = 300 / speedEl.value;
});

/*--================================================--*\
                        -- project Sixteen --                     
\*--================================================--*/

let resultEl = document.querySelector("#projectSixteen .result");
let clipboardEl = document.querySelector("#projectSixteen .clipboard");
let lengthEl = document.querySelector("#projectSixteen .length");
let uppercaseEl = document.querySelector("#projectSixteen .uppercase");
let lowercaseEl = document.querySelector("#projectSixteen .lowercase");
let numbersEl = document.querySelector("#projectSixteen .numbers");
let symbolsEl = document.querySelector("#projectSixteen .symbols");
let generateEl = document.querySelector("#projectSixteen .submit");

let randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol,
};

generateEl.addEventListener("click", () => {
  let length = lengthEl.value;
  let upper = uppercaseEl.checked;
  let lower = lowercaseEl.checked;
  let number = numbersEl.checked;
  let symbol = symbolsEl.checked;
  resultEl.innerHTML = generatePassword(upper, lower, number, symbol, length);
});

clipboardEl.addEventListener("click", () => {
  let password = resultEl.innerText.slice(
    0,
    resultEl.innerText.length - clipboardEl.innerText.length - 1
  );
  if (!password) {
    return;
  }
  navigator.clipboard.writeText(password);
  alert("copied to clipboard");
});

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSymbol() {
  let symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = "";
  let typeNumber = upper + lower + number + symbol;
  let typeArr = [{ upper }, { lower }, { number }, { symbol }].filter((obj) => {
    return Object.values(obj)[0];
  });

  if (typeNumber == 0) {
    return "";
  }

  for (let i = 0; i < length; i++) {
    typeArr.forEach((obj) => {
      let funcName = Object.keys(obj)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  return generatedPassword.slice(0, length);
}

/*--================================================--*\
                        -- project 17 --                     
\*--================================================--*/

let card = document.querySelector("#project_17");

async function getData(str, config = {}) {
  const url = str;
  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error("Response status: " + response.status);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function dadJoke() {
  let data = await getData(`https://icanhazdadjoke.com/`, {
    headers: { Accept: "application/json" },
  });
  card.querySelector("p").innerText = data.joke;
}
dadJoke();
card.querySelector("button").addEventListener("click", dadJoke);

/*--================================================--*\
                        -- project 18 --                     
\*--================================================--*/

let container18 = document.querySelector("#project_18 .con");
let input18 = document.querySelector("#project_18 .header_18 input");
let paginationBtn = document.querySelector("#project_18 .pagination button ");
let pageDescover = 1;
let pageSearch = 1;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTY3OTVhMzViZjVhMWE2YmFkODc0YmQ4ZmZhOTk4MiIsIm5iZiI6MTcyNDQ5NzAwOS43Mjc0OTksInN1YiI6IjY2YzliOGE2MTA2OGNhMzU3ZTM4ODQ3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7IEkwvZZ8sL1g2j4_ksuk96xVPV5DZcqiPpIyktQuTg",
  },
};
let descoverURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&region=us&sort_by=popularity.desc&page=`;

async function getMovies(url, page) {
  try {
    let res = await fetch(url + `${page || 1}`, options);
    if (!res.ok) throw new Error("Error Fetch URL");

    let data = await res.json();
    let finalData = data.results.filter((e) => e.backdrop_path != null);
    finalData.forEach((e) => {
      let el = document.createElement("div");
      el.classList.add("card");
      el.innerHTML = `<img
              src="https://image.tmdb.org/t/p/original${e.poster_path}"
              alt="film-poster"
              width=""
              height=""
              loading="lazy"
              aria-hidden="true"
              async="async" />
            <div class="card-title">
              <h3>${e.title}</h3>
              <span class="rating">${e.vote_average}</span>
            </div>
            <div class="card-overview">
              <h3>Overview</h3>
              <p>
                ${e.overview}
              </p>`;
      if (e.vote_average < 5) el.querySelector(".rating").style.color = "red";
      else if (e.vote_average <= 7.5)
        el.querySelector(".rating").style.color = "orange";
      else el.querySelector(".rating").style.color = "green";
      container18.appendChild(el);
    });
  } catch (err) {
    console.log(err);
  }
}

function searchMovies(query, page) {
  pageSearch = 1;
  let searchURL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&region=us&page=`;
  container18.innerHTML = "";
  getMovies(searchURL, page);
}
input18.parentElement.addEventListener("submit", (e) => {
  searchMovies(input18.value, 1);
  e.preventDefault();
});

getMovies(descoverURL, 1);

paginationBtn.addEventListener("click", (e) => {
  getMovies(descoverURL, ++pageDescover);
  e.preventDefault();
});

/*--================================================--*\
                        -- project 19 --                     
\*--================================================--*/

let container19 = document.querySelector("#project_19 .cadre");
let search19 = container19.querySelector("input");

async function randomUser_19() {
  try {
    let response = await fetch("https://randomuser.me/api/?results=50");

    if (!response.ok) {
      throw new Error("Error fetch");
    }

    let data = await response.json();

    container19.querySelector("ul").innerHTML = "";
    data.results.forEach((person) => {
      let li = document.createElement("li");

      li.innerHTML = `
            <img src="${person.picture.medium}" alt="Fletcher">
            <div class="user-info">
                <h4>${person.name.first} ${person.name.last}</h4>
                <p>${person.location.city}, ${person.location.state}</p>
            </div>
        `;
      container19.querySelector("ul").appendChild(li);
    });
  } catch (err) {
    console.log(err);
  }
}

randomUser_19();

search19.addEventListener("input", () => {
  container19.querySelectorAll(".user-info h4").forEach((name) => {
    if (name.textContent.toLowerCase().includes(search19.value.toLowerCase())) {
      name.parentElement.parentElement.classList.remove("hide");
    } else name.parentElement.parentElement.classList.add("hide");
  });
});

/*--================================================--*\
                        -- project 20 --                     
\*--================================================--*/

let canvas20 = document.querySelector("#project_20 canvas");
let cx = canvas20.getContext("2d");

function branch(length, angle, scale) {
  cx.fillRect(0, 0, 1, length);
  if (length < 10) return;
  cx.save();
  cx.translate(0, length);
  cx.rotate(-angle);
  branch(length * scale, angle, scale);
  cx.rotate(2 * angle);
  branch(length * scale, angle, scale);
  cx.restore();
}
cx.translate(150, 0);
branch(50, 0.4, 0.8);
/*--================================================--*\
                        -- project 21 --                     
\*--================================================--*/
const toggle21 = document.querySelector("#project_21 toggle");
const nav21 = document.querySelector("#project_21 nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));
