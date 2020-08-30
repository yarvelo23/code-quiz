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

  // conditional statement to check if user has reached the final question
if (questionIndex >= questions.length) {
  // if on final question, run the quizEnd function afterward
  quizEnd();
  // creating a div to display quiz end alert
  createDiv.textContent = "End of quiz!" + " " + "Your score is " + score + "/" + questions.length;
}
else {
  // if not on final question, display the next question
  displayQuestions(questionIndex);
}
// appending the next question to the next div that follows
questionsContent.appendChild(createDiv);

}

// function to display the end quiz screen
function quizEnd() {
  // clears question content
  questionsContent.innerHTML = "";
  timerEl.innerHTML = "";
  
  var createHeader = document.createElement("h1");
  createHeader.setAttribute("id", "createHeader");
  createHeader.textContent = "All Done!"
  
  questionsContent.appendChild(createHeader);
  
  
  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");
  
  questionsContent.appendChild(createP);
  
  if (timeRemaining >= 0) {
  var secondsLeft = timeRemaining;
  var createP2 = document.createElement("p");
  clearInterval(timeInterval);
  createP.textContent = "Your final score is: " + secondsLeft;
  
  questionsContent.appendChild(createP2);
  }
  
  // create display text for initials input
  var initialsLabel = document.createElement("label");
  initialsLabel.setAttribute("id", "initialsLabel");
  initialsLabel.textContent = "Enter your initials: ";
  
  questionsContent.appendChild(initialsLabel);
  
  // create text box for initials input
  var initialsInput = document.createElement("input");
  initialsInput.setAttribute("type", "text");
  initialsInput.setAttribute("id", "initials");
  initialsInput.textContent = "";
  
  questionsContent.appendChild(initialsInput);
  
  // create button to allow for submitting initials input
  var submitInitials = document.createElement("button");
  submitInitials.setAttribute("type", "submit");
  submitInitials.setAttribute("id", "Submit");
  submitInitials.textContent = "Submit";
  
  questionsContent.appendChild(submitInitials);


submitInitials.addEventListener("click", function () {
  var initials = createInput.value;

  if (initials === null) {

   console.log("Please enter valid initials!");
 }
});

}