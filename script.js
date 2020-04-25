var timer = document.querySelector("timer");
var question = document.querySelector("question");
var answer = document.querySelector("answer");
var answer1 = document.querySelector("answerbutton");
var submitButton = document.querySelector("btn");



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
var quizAnswers = quiz[0].answer;
// console.log(quiz[0].answers);
var answerBtn = answer1; 


$("#answer1").append(quizAnswers);


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