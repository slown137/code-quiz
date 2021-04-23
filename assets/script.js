var startBtn = document.querySelector("#start-button");
var timerOutput = document.querySelector("#timer")
var infoBox = document.querySelector(".info-box")
var quizBox = document.querySelector(".quiz-box")
var quesText = document.querySelector(".quest-text")
var answers = document.querySelector(".answers")
var option1 = document.querySelector(".option1")
var option2 = document.querySelector(".option2")
var option3 = document.querySelector(".option3")
var option4 = document.querySelector(".option4")
var answerResp = document.querySelector(".answer-resp")
var correctResp = document.querySelector("#correct")
var wrongResp = document.querySelector("#wrong")
var endBox = document.querySelector(".end-box")
var finalScore = document.querySelector("#final-score")

var secondsLeft = 75

var questions = [
    [
        'Which option has the correct syntax for an alert?',
        '1.  alert: \"wow\"',
        '2.  alert= \"wow\"',
        '3.  alert(\"wow\");',
        '4.  alert=wow'
    ],
    [
        'Choose the correct function for getting a random number.',
        '1.  Math.random()',
        '2.  math.random()',
        '3.  random.Math()',
        '4.  math{random}'
    ],
    [
        'Which is an incorrect way to define a variable?',
        '1.  var myNumber = 20',
        '2.  let myNumber = 20',
        '3.  const myNumber = 20',
        '4.  make myNumber = 20'
    ],
    [
        'If I wrote "console.log(20 > 9)" what will the console return?',
        '1.  true',
        '2.  false',
        '3.  11',
        '4.  0.45'
    ],
    [
        'Choose the correctly written array.',
        '1. var numbers = {1, 2, 3, 4}',
        '2. var numbers = -1, 2, 3, 4,',
        '3. var numbers = 1, 2, 3, 4,',
        '4. var numbers = [1, 2, 3, 4]'
    ]
]

var hideElement = function(element){
    element.setAttribute("data-state", "hidden");
    element.style.display = "none";
}

var displayElement = function(element){
    element.setAttribute("data-state", "visible");
    element.style.display = "block";
}

startBtn.addEventListener('click', function(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerOutput.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        // endQuiz();
        }
    }, 1000);

    hideElement(infoBox);
    hideElement(startBtn);
    displayElement(quizBox);
    displayElement(quesText);
    displayElement(answers);
    console.log(quesText.textContent);
})

var wrongAnswer = function() {
    secondsLeft = secondsLeft - 15;
    displayElement(wrongResp);
};

var correctAnswer = function() {
    displayElement(correctResp);
};

var qIndex = 0

console.log(questions[0])
/* var nextQuestion = function() {
    if qIndex ===
} */

if (quesText.textContent = questions[0][0]) {
    option1.addEventListener("click", function(){
        wrongAnswer();
    });
    option2.addEventListener("click", function(){
        wrongAnswer();
    });
    option3.addEventListener("click", function(){
        correctAnswer();
    });
    option4.addEventListener("click", function(){
        wrongAnswer();
    });
    qIndex++;
} else if (qIndex === 1) {
    option1.addEventListener("click", function(){
        correctAnswer();
    });
    option2.addEventListener("click", function(){
        wrongAnswer();
    });
    option3.addEventListener("click", function(){
        wrongAnswer();
    });
    option4.addEventListener("click", function(){
        wrongAnswer();
    });
    qIndex++;
} else if (qIndex === 2) {
    option1.addEventListener("click", function(){
        wrongAnswer();
    });
    option2.addEventListener("click", function(){
        wrongAnswer();
    });
    option3.addEventListener("click", function(){
        wrongAnswer();
    });
    option4.addEventListener("click", function(){
        correctAnswer();
    });
    qIndex++;
} else if (qIndex === 3) {
    option1.addEventListener("click", function(){
        correctAnswer();
    });
    option2.addEventListener("click", function(){
        wrongAnswer();
    });
    option3.addEventListener("click", function(){
        wrongAnswer();
    });
    option4.addEventListener("click", function(){
        wrongAnswer();
    });
    qIndex++;
} else if (qIndex === 4) {
    option1.addEventListener("click", function(){
        wrongAnswer();
        // endQuiz();
    });
    option2.addEventListener("click", function(){
        wrongAnswer();
        // endQuiz();
    });
    option3.addEventListener("click", function(){
        wrongAnswer();
        // endQuiz();
    });
    option4.addEventListener("click", function(){
        correctAnswer();
        // endQuiz();
    });
};
