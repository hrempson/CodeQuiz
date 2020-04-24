var timer = document.querySelector("timer");
var question = document.querySelector("question");
var answer = document.querySelector("answer");
var answerButton = document.querySelector("answerbutton");
var submitButton = document.querySelector("btn");
var currentQuestion = -1;
const quiz = [{
        question: "What is jQuery?",
        answers: {
            a: "A JavaScript library",
            b: "A text editor",
            c: "A github repository",
        },
        correctAnswer: "a"
    },
    {
        question: "What is vanilla Javascript?",
        answers: {
            a: "A JavaScript library",
            b: "Basic JavaScript",
            c: "A JavaScrit Library",
        },
        correctAnswer: 'b'
    },
    {
        question: "Who founded JavaScript?",
        answers: {
            a: "Bill Gates",
            b: "Larry Page",
            C: "Brendan Eich",
        },
        correctAnswer: "c"
    }
];


// Start button
var quizQuestions = quiz.question
var startBtn = $("<button>Start Quiz</button>")
startBtn.click(function () {
    var startTimer = confirm("Go!")
    //confirm === true, start timer
    if (startTimer === true) {
        startGame = displayTime;
        // hide start.Btn 
        startBtn.hide();
        quizQuestions;
        
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

// 





// function nextQuestion(event) {
//     if (currentQuestion < quiz.length - 1) {
//         currentQuestion++;
//     } 
//     else {
//         alert("Game Over!")
//     }


// var answerBtn = currentQuestion++;
// answerBtn.click(nextQuestion() {

// }

function nextQuestion() {
    if (currentQuestion < quiz.length - 1) {
        currentQuestion++;
    } 
    else {
        alert("Game Over!");
        // END OF QUIZ

    }
}
$(".question").append(currentQuestion);


// // on click, show next question
// function nextQuestion(event) {
//     if (answerBtn === true) {
//         answerBtn.addEventListener("click", Question)
//     } else {
//         secondsLeft - 10; // subtract 10s from timer