// variable to keep track of score
var score = 0;

var questionIndex = 0;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions"); //CHECK
var timerEl = document.getElementById("time"); // CHECK
var startBtn = document.getElementById("start");  // CHECK
var wrapper = document.querySelector("#wrapper"); // CHECK


var timeRemaining = 75;
var timeInterval = 0;
var timePenalty = 5;
var questionsList = document.createElement("ul");

// on start button click, trigger timer and display first question
startBtn.addEventListener("click", function () {
  if (timeInterval === 0) {
    timeInterval = setInterval(function () {
      timeRemaining--;
      timerEl.textContent = "Time Remaining: " + timeRemaining;

      if (timeRemaining <= 0) {
        clearInterval(timeInterval);
        quizEnd();
        timerEl.textContent = "Time's up!";
      }
    }, 1000);
  }
  displayQuestions(questionIndex);
});


