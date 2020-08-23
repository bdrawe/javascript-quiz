
// GLOBAL VARIABLES
let timerEl  = document.getElementById('timer');
let startBtn = document.querySelector("#start-quiz");
let qContainer = document.querySelector("#q-container");
let answersList = document.getElementById("answersList");
let answerBool = document.getElementById("answer-boolean");
let saveContainerText = document.getElementById("save-container");
let controlButton = document.querySelector('button');
let startButton = document.getElementById("start-quiz");
let timeLeft = 3;
let score = 0;
let totalPts = 15;
answerCounter = 0;
let questionCounter = 0;
let allPlayersScore = [];
let questions = [
    {
       question: "When was Javascript first used?",
       answers: [
           {a: 2001, correct: false},
           {a: 1995, correct: true},
           {a: 1500, correct: false},
       ]
       //questions[0].answers[1].correct
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
        question: "What is the DOM API that makes prevents the default of a form submission?",
        answers: [
            {a: ".preventDefault", correct: true},
            {a: "_blank", correct: false},
            {a: ".delaySubmission", correct: false},
        ]
     },
];
let qOneAnswer = questions[0].answers[1].correct;
let qTwoAnswer = questions[1].answers[0].correct;
let qThreeAnswer = questions[2].answers[0].correct;


let startQuiz =  function(){
    //silence the button!
    startButton.style.display="none";

    for(let i = 0; i < questions.length; i++)
    {
        let answer = document.createElement("button");
        answer.className = 'ansOptions';
        answer.value = questions[i].answers[i].a;
        answer.textContent = questions[i].answers[i].a;
        answersList.appendChild(answer);
        // console.log(questions[0].answers[1].correct);
    };
    //first button
    // let answerOne = document.createElement("button");
    // answerOne.className = 'ansOptions';
    // answerOne.value = questions[0].answers[0].a;
    // answerOne.textContent = questions[0].answers[0].a;
    // answersList.appendChild(answerOne);

    // //second button
    // let answerTwo = document.createElement("button");
    // answerTwo.className = 'ansOptions';
    // answerTwo.id = "answerTwo";
    // answerTwo.value = questions[0].answers[1].a;
    // answerTwo.textContent = questions[0].answers[1].a;
    // answersList.appendChild(answerTwo);
    
    // //third button
    // let answerThree = document.createElement("button");
    // answerThree.className = 'ansOptions';
    // answerThree.value = questions[0].answers[2].a;
    // answerThree.textContent = questions[0].answers[2].a;
    // answersList.appendChild(answerThree);
    // answerThree.onclick = control()
    //display the question
    qContainer.textContent = questions[questionCounter].question;

    // answer = document.querySelector('.ansOptions');
    answersList.addEventListener("click", control);
};

//CONTROL FUNCTION **THIS FUNCTION NEEDS HELP
 function control(){
     console.log("Entering Control Function");
     console.log(event.target);
    
    if(null){
        alert("Yay!");
        score+=5
    } else {
        alert("NO!")
        timeLeft -= 5;
    }
    questionCounter++
    answerCounter++
    startQuiz()
};
function nxtQuestion(e){
    if(e === true){

    }
}

//timer function **THIS FUNCTION IS FINE!
function countdown(){
    
 let timer = setInterval(function() {
  
    if(timeLeft > 0) {
      timerEl.textContent = timeLeft + ' Seconds Remaining'
      timeLeft--;
    } else {
      console.log("Out of time!")
      alert("You are now out of time! Your score is " +  score + "/" + totalPts)
      let getScore = localStorage.getItem('score');
      clearInterval(timer);
      highScores();
    }
   
  }, 1000)
     
  }

  //loadNewPage Function **THIS FUNCTION NEEDS HELP
  function highScores(){
    timerEl.style.display ="none";
    qContainer.style.display ="none";
    answersList.style.display ="none";
    saveContainerText.style.display = "block";
    //saveContainerText.textContent = score + "/" + totalPts;
  }

  function saveContainer(){
      
  }
    

startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startQuiz);




    
