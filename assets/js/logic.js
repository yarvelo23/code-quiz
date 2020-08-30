// variable to keep track of score
var score = 0;

// keep track of the current question
var questionIndex = 0;

// variables to reference DOM elements
var startScreen = document.getElementById("start-screen");
var timerEl = document.getElementById("time"); 
var startBtn = document.getElementById("start");  
var wrapper = document.querySelector(".wrapper"); 
var questionsContent = document.getElementById("questions");


// set timer to start at 76, a second is automatically subtracted on button click
var timeRemaining = 76;
var timeInterval = 0;
var timePenalty = 5;
var questionsList = document.createElement("ul");

// on start button click, trigger timer and display first question
startBtn.addEventListener("click", function () {
  // checking remaining time and setting text for timer display
  if (timeInterval === 0) {
    timeInterval = setInterval(function () {
      timeRemaining--;
      timerEl.textContent = timeRemaining;

      if (timeRemaining <= 0) {
        clearInterval(timeInterval);
        quizEnd();
        timerEl.textContent = "Time's up!";
      }
    }, 1000);
  }
  // run the function to display questions and choices
  displayQuestions(questionIndex);
});

// displays questions and choices after start button is clicked
function displayQuestions(questionIndex) {
  // removes original screen content
  startScreen.innerHTML = "";
  questionsList.innerHTML = "";

  // for loop to display questions from array
  for (var i = 0; i < questions.length; i++) {
    var questionTitle = questions[questionIndex].title;
    var questionChoices = questions[questionIndex].choices;
    questionsContent.textContent = questionTitle;
  }

  questionChoices.forEach(function (displayChoices) {
    var questionChoice = document.createElement("li");
    questionChoice.textContent = displayChoices;
    questionsContent.appendChild(questionsList);
    questionsList.appendChild(questionChoice);
    questionChoice.addEventListener("click", (checkAnswer));
  })
  
}

// function to compare selected choice with answer
function checkAnswer(event) {
  var element = event.target;

  if (element.matches("li")) {

    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");

    if (element.textContent == questions[questionIndex].answer) {
      score++;
      createDiv.textContent = "Correct!"
    } else {

      timeRemaining = timeRemaining - timePenalty;
      createDiv.textContent = "Wrong choice, the answer is: " + questions[questionIndex].answer;
    }
  
  }

  // to keep track of current question
  questionIndex++;

}


