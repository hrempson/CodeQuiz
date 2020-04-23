var timer = document.querySelector("timer");
var question = document.querySelector("question");
var answer = document.querySelector("answer");
var answerButton = document.querySelector("answerbutton");
var submitButton = document.querySelector("btn");
var quiz = [
    {
    question: "What is jQuery?",
        answers: {
        a: "A JavaScript library",
        b: "A text editor",
        c: "A github repository",
    },
        correctAnswer: "a"
    },
    { question: "What is vanilla Javascript?",
        answers: {
        a: "A JavaScript library",
        b: "Basic JavaScript",
        c: "A JavaScrit Library",
    },
        correctAnswer: 'b'
    },
    { question: "Who founded JavaScript?",
        answers: {
        a: "Bill Gates",
        b: "Larry Page",
        C: "Brendan Eich",
    }, 
    correctAnswer: "c"
    }];
    



//  secondsElapsed = 0;
    // setTime();
    // secondsLeft();

var time = secondsLeft
var secondsLeft = "90"
// countdown timer in seconds
var secondsLeft = setInterval(function() {
var seconds = Math.floor((distance % (1000 * secondsLeft)) / 1000);
document.getElementById("timer").innerHTML = secondsLeft + " seconds";
//timer.appendChild; ?

//clear timer @ Game Over
if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Game Over!";
  }
}, 1000);





document.getElementById("#question")
//create 5 questions


//append


document.getElementById ("#answer")
// create 4 answers per question

// on click, show next question
function nextQuestion(event) {
    if (answerButton === true) {
    answerButton.addEevntListener("click", Question)
    }
    else ( secondsLeft - 10 ); // subtract 10s from timer


// event listeners
// submitButton.addEventListener("click", startTimer);


