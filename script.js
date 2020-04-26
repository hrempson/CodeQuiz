// Global objects for quiz
var elsapsedTime = null;
var quizFinished = false;
var quizTime = 30;
var timer = quizTime;
var currentQuestion = 0;
var submitBtn

// Global quiz object
const quiz = [{
        question: "What is jQuery?",
        answers: [
            "A JavaScript library",
            "A text editor",
            "A github repository",
        ],
        correctAnswer: "A JavaScript library"
    },
    {
        question: "What is vanilla Javascript?",
        answers: [
            "A flavor of ice cream",
            "Basic JavaScript",
            "Boring JavaScript",
        ],
        correctAnswer: "Basic JavaScript"
    },
    {
        question: "Who founded JavaScript?",
        answers: [
            "Bill Gates",
            "Larry Page",
            "Brendan Eich",
        ],
        correctAnswer: "Brendan Eich"
    },
    {
        question: "Who was the first computer programmer?",
        answers: [
            "Ada Lovelace",
            "Steve Jobs",
            "Dennis Ritchie",
        ],
        correctAnswer: "Ada Lovelace"
    }
];

// Start button creation
var startBtn = $("<button>Start Quiz</button>");
$(".controls").html(startBtn);
$(".controls").on("click", startQuiz);
// Hide form until quiz completes
$(".scoreboard").hide();

// Validate answer click
$(".answers").on("click", validateQuestion);

// Handle form submit
$("#scoreboard").submit(function (event) {
    var $inputs = $('#scoreboard :input');
    var leaderText = "";
    $inputs.each(function () {
        leaderText += $(this).val() + " ";
    });
    leaderText += " " + elsapsedTime + " seconds <br>"
    $(".leaders").prepend(leaderText);
    restartQuiz()
    // Prevents form from refreshing the page on submit
    event.preventDefault();
})

// Start quiz function
function startQuiz() {
    // Hide quiz button
    startBtn.hide();
    // Start timer
    displayTime();
    displayQuestion(currentQuestion);
}

// Display time in html function
function displayTime() {
    // Decriment timer by 1 sec
    var seconds = timer--;
    // If seconds are greater than 0 and quiz has not finished
    if (seconds > 0 && quizFinished === false) {
        // Set UI value, call timer again if > 0
        document.querySelector(".timer").innerHTML = ":" + seconds;
        setTimeout(this.displayTime, 1000);
    } else {
        // Clear timer @ Game Over
        document.querySelector(".timer").innerHTML = "Quiz Complete!";
    }
}

// Stop timer when quiz finishes
function stopTimer() {
    quizFinished = true
}

// Validate user answer to question function
function validateQuestion(event) {
    if ($(event.target).text() === quiz[currentQuestion].correctAnswer) {
        // check that there is another question
        if (currentQuestion < quiz.length - 1) {
            currentQuestion++;
            displayQuestion(currentQuestion);
        } else {
            // Quiz is finished, show results
            showResults();
        }
    } else {
        if ( timer > 10) {
            // if question is wrong, decriment 10 seconds
            timer -= 10;
        }
        else {
            timer = 0;
            showResults();
            
        }
        
    }
}

// Show Results
function showResults() {
    stopTimer();
    // Store elapsed time
    elsapsedTime = quizTime - timer;
    $(".message").html("You've finished the quiz in " + elsapsedTime + " seconds");
    // Show scoreboard when quiz completes
    $(".scoreboard").show();
    // When name submitted show scoreboard
}

// Display question function
function displayQuestion(questionIndex) {
    // populate question title
    $(".question").html(quiz[questionIndex].question);
    // populate answers options in html
    for (let i = 0; i < quiz[questionIndex].answers.length; i++) {
        // appending answers to html
        $("#answer" + i).html(quiz[questionIndex].answers[i])
    }
}

// Restart quiz
function restartQuiz() {
    $(".scoreboard").hide();
    elsapsedTime = null;
    quizFinished = false;
    quizTime = 30;
    timer = quizTime;
    currentQuestion = 0;
    resetQuestion();
    startBtn.show();
}

// Set question state back to original
function resetQuestion() {
    // populate question title
    $(".question").html("");
    // populate answers options in html
    for (let i = 0; i < 3; i++) {
        // appending answers to html
        $("#answer" + i).html("")
    }
}