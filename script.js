var timer = document.querySelector("timer");
var question = document.querySelector("question");
var answer = document.querySelector("answer");
var answerButton = document.querySelector("answerbutton");
var submitButton = document.querySelector("btn");
var currentQuestion = -1;
var quiz = [{
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


var secondsLeft = 3;
// countdown timer in seconds
var countdownTimerId = setInterval(displayTime, 1000);

function displayTime() {
    var seconds = secondsLeft--;
    if (seconds > 0) {
        document.querySelector(".timer").innerHTML = seconds + " seconds";
    } else {
        clearInterval(countdownTimerId);
        document.querySelector(".timer").innerHTML = "Game Over!";
    }
}
//timer.appendChild; ?

//clear timer @ Game Over






document.getElementById("#question")
//create 5 questions


//append


document.getElementById("#answer")

function nextQuestion (event) {
    if (currentQuestion < quiz.length - 1) {
            currentQuestion++;}
    else {
        // END OF QUIZ
         console.log ('End of quiz');
          }
         console.log (quiz[currentQuestion]);
          //   if (answerButton === true) {
          //     answerButton.addEventListener ('click', Question);
          //   } else {
          //     secondsLeft - 10; // subtract 10s from timer
          //   }
        }


// // on click, show next question
// function nextQuestion(event) {
//     if (answerButton === true) {
//         answerButton.addEventListener("click", Question)
//     } else {
//         secondsLeft - 10; // subtract 10s from timer

// }
// event listeners
// submitButton.addEventListener("click", startTimer)