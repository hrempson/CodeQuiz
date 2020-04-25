var timer = document.querySelector(".timer");
var question = document.querySelector(".question");
var answer = document.querySelector(".answer");
var answer1 = document.querySelector("#answer1");

var submitButton = document.querySelector(".btn");
var score = 0;
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
            "A JavaScript library",
            "Basic JavaScript",
            "",
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

var quizQuestions = quiz[0].question;
var currentQuestion = quiz[0].question;
var validateAnswer1 = quiz[0].correctAnswer



// $("#answer1").click(validateAnswer) 
//     if (validateAnswer === true);
//     alert("Correct!")
// console.log(validateAnswer);


// Start Button
var startBtn = $("<button>Start Quiz</button>")
$(".question").html(startBtn);

startBtn.click(function () {
    var startTimer = confirm("Go!")
    //confirm === true, start timer
    
    if (startTimer === true) {
        startGame = displayTime;
        startBtn.hide();
        $(".question").append(currentQuestion);
        // Answer buttons populate data from quiz array
        var quizAnswers1 = quiz[0].answers[0];
        var quizAnswers2 = quiz[0].answers[1];
        var quizAnswers3 = quiz[0].answers[2];
        var answerBtn = answer1; 
        $("#answer1").append(quizAnswers1);
        $("#answer2").append(quizAnswers2);
        $("#answer3").append(quizAnswers3);
        // click events for answer1,2,3 buttons
        $(".answers").on("click", function(event) 
        { console.log($(event.target).text(),quiz[0].correctAnswer, $("#answer1").text());
           if ($(event.target).text() === quiz[0].correctAnswer)
               alert("correct!");
            else {
            secondsLeft -= 10;
        }})
    
        

    

        

// Timer
    var secondsLeft = 30;
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
    }}})

//append to html


//Quiz questions begin until all have been



function nextQuestion() {
    if (currentQuestion < quiz.length -1) {
        currentQuestion++;
    } 
    else {
        alert("Game Over!");
     
    }
};





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