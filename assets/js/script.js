
// GLOBAL VARIABLES
let startBtn = document.querySelector("#start-quiz");
let qContainer = document.querySelector("#q-container");
let answersList = document.getElementById("answersList");
let answerBool = document.getElementById("answer-boolean");
let questionCounter = 0;
let controlButton = document.querySelector('button');
let timeLeft = 120;
let startButton = document.getElementById("start-quiz");
//define score and store it in a variable
let score = 0;
//declare your array of objects
let questions = [
    {
       question: "When was Javascript first used?",
       answers: [
           {a: 2001, correct: false},
           {b: 1995, correct: true},
           {c: 1500, correct: false},
       ]
    },
    {
        question: "Which prompt returns the boolean true or false?",
        answers: [
            {a: "Prompt", correct: true},
            {a: "Alert", correct: false},
            {a: "Confirm", correct: false},
        ]
     },
     {
        question: "When will Bryce learn Javascript?",
        answers: [
            {a: "Next Week", correct: true},
            {a: "Today", correct: false},
            {a: "Help", correct: false},
        ]
     },
];

// for(let i = 0; i < questions.length; i++){
let startQuiz =  function(){
    //silence the button!
    startButton.style.display="none";
    
    //first button
    let answerOne = document.createElement("button");
    answerOne.className = 'ansOptions';
    answerOne.value = questions[0].answers[0].a;
    answerOne.textContent = questions[0].answers[0].a;
    answersList.appendChild(answerOne);
    //second button
    let answerTwo = document.createElement("button");
    answerTwo.className = 'ansOptions';
    answerTwo.value = questions[0].answers[1].b;
    answerTwo.textContent = questions[0].answers[1].b;
    answersList.appendChild(answerTwo);
    //third button
    let answerThree = document.createElement("button");
    answerThree.className = 'ansOptions';
    answerThree.value = questions[0].answers[2].c;
    answerThree.textContent = questions[0].answers[2].c;
    answersList.appendChild(answerThree);
    //display the question
    qContainer.textContent = questions[0].question;

    answer = document.querySelector('button');
    answer.addEventListener("click", control);

    
};

let control = function(){
    let trueAnswer = questions[0].answers[2].b
    if(trueAnswer === true){
        alert("Yay!");
    } else {
        alert("NO!")
        timeLeft -= 5;
    }
}; 

    
// answer.addEventListener("click", control);
startBtn.addEventListener("click", startQuiz);




    
