var timer = document.querySelector(".timer");
var question = document.querySelector(".question");
var answer = document.querySelector(".answer");
var answer1 = document.querySelector(".answer1");
var submitButton = document.querySelector(".btn");
var score = 0;
const quiz = [{
        question: "What is jQuery?",
        answers: [
            "A JavaScript library",
            "A text editor",
            "A github repository",
        ],
        correctAnswer: "A JavaSctipt library"
    },
    {
        question: "What is vanilla Javascript?",
        answers: [
            "A JavaScript library",
            "Basic JavaScript",
            "A JavaScrit Library",
    ],
        correctAnswer: 'Basic JavaScript'
    },
    {
        question: "Who founded JavaScript?",
        answers: [
            "Bill Gates",
            "Larry Page",
            "Brendan Eich",
    ],
        correctAnswer: "Brendan Eich"
    }
];

var currentQuestion = quiz[0].question;



// Start button
var quizQuestions = quiz[0].question
var startBtn = $("<button>Start Quiz</button>")

startBtn.click(function () {
    var startTimer = confirm("Go!")
    //confirm === true, start timer
    if (startTimer === true) {
        startGame = displayTime;
        // hide start.Btn 
        startBtn.hide();
    }

// Timer
    var secondsLeft = 3;
    var countdownTimerId = setInterval(displayTime, 1000);

    function displayTime() {
        var seconds = secondsLeft--;
        if (seconds > 0) {
            document.querySelector(".timer").innerHTML = ":" + seconds;
        } else {
            clearInterval(countdownTimerId);
            //clear timer @ Game Over////
            document.querySelector(".timer").innerHTML = "Game Over!";
        }
    }
});
//append to html
$(".question").append(startBtn);
// document.getElementsByClassName("question").innerHTML = "Quiz Done!"
//Quiz questions begin

var currentQuestion = quiz[0].question;
// console.log(currentQuestion)
function nextQuestion() {
    if (currentQuestion < quiz.length -1) {
        currentQuestion++;
    } 
    else {
        alert("Game Over!");
    }
}
$(".question").append(currentQuestion);

// Answer buttons populate data from quiz array
var quizAnswers1 = quiz[0].answers[0];
var quizAnswers2 = quiz[0].answers[1];
var quizAnswers3 = quiz[0].answers[2];
// console.log(quiz[0].answers);
var answerBtn = answer1; 

$("#answer1").append(quizAnswers1);
$("#answer2").append(quizAnswers2);
$("#answer3").append(quizAnswers3);


// //validate answers
// document.addEventListener("click", validateAnswer);
//     answer.click(validateAnswer) 
//     if  = "A JavaSctipt library");
//     alert("correct");
   




// answerBtn.click(function () {
//     nextQuestion;
// })


//when incorrect answer is clicked, subtrack 10 seconds from timer
// // on click, show next question
// function nextQuestion(event) {
//     if (answerBtn === true) {
//         answerBtn.addEventListener("click", Question)
//     } else {
//         secondsLeft - 10; // subtract 10s from timer





//when game is over, display form for scoreboard