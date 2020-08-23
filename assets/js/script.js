
// GLOBAL VARIABLES
let timerEl  = document.getElementById('timer');
let startBtn = document.querySelector("#start-quiz");
let qContainer = document.querySelector("#q-container");
let answersList = document.getElementById("answersList");
let answerBool = document.getElementById("answer-boolean");
let saveContainerText = document.getElementById("save-container");
let controlButton = document.querySelector('button');
let startButton = document.getElementById("start-quiz");
let displayScore = document.querySelector("#displayScore");
let pastInt = document.querySelector("#pastInt");
let pastScore = document.querySelector("#pastScore");
let card = document.querySelector(".card");
let timeLeft = 200;
let score = 0;
let totalPts = 15
let questionCounter = 0;
let allPlayersScore = [];
let submitButton = document.querySelector("#submit");
let questions = [
    {
       question: "When was Javascript first used?",
       answers: [
           {a: 2001, correct: false},
           {b: 1995, correct: true},
           {c: 1500, correct: false},
       ]
       //questions[questionCounter].answers[1].correct
    },
    {
        question: "Which prompt returns the boolean true or false?",
        answers: [
            {a: "Prompt", correct: true},
            {b: "Alert", correct: false},
            {c: "Confirm", correct: false},
        ]
     },
     {
        question: "What is the DOM API that makes prevents the default of a form submission?",
        answers: [
            {a: ".preventDefault", correct: true},
            {b: "_blank", correct: false},
            {c: ".delaySubmission", correct: false},
        ]
     },
];
let qOneAnswer = questions[0].answers[1].correct;
let qTwoAnswer = questions[1].answers[0].correct;
let qThreeAnswer = questions[2].answers[0].correct;


let startQuiz =  function(){
    //silence the button!
    startButton.style.display="none";

    //first button
    let answerOne = document.createElement("button");
    answerOne.id = 'ansOptions';
    answerOne.value = questions[questionCounter].answers[0].a;
    answerOne.textContent = questions[questionCounter].answers[0].a;
    answersList.appendChild(answerOne);

    //second button
    let answerTwo = document.createElement("button");
    answerTwo.id = 'ansOptions';
    answerTwo.value = questions[questionCounter].answers[1].b;
    answerTwo.textContent = questions[questionCounter].answers[1].b;
    answersList.appendChild(answerTwo);
    
    //third button
    let answerThree = document.createElement("button");
    answerThree.id = 'ansOptions';
    answerThree.value = questions[questionCounter].answers[2].c;
    answerThree.textContent = questions[questionCounter].answers[2].c;
    answersList.appendChild(answerThree);


    //display the question
    qContainer.textContent = questions[questionCounter].question;
    console.log(qContainer.textContent);

    
    answersList.addEventListener("click", control);
// 
};

//CONTROL FUNCTION **THIS FUNCTION NEEDS HELP
 function control() {
  
    if(quest === true){
        score++
        window.alert("correct!")
        console.log(score);
        
        console.log(displayScore);
    } else {
        alert("try again!");
        window.confirm(questions[i].q);
        
    questionCounter++
    startQuiz();
   
// };
 };
//timer function **THIS FUNCTION IS FINE!
function countdown(){
    
 let timer = setInterval(function() {
  
    if(timeLeft > 0) {
      timerEl.textContent = timeLeft + ' Seconds Remaining'
      timeLeft--;
    } else {
      alert("You are now out of time! Your score is " +  score + "/" + totalPts)
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

//Setting the scores and initials
  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    let playersIn = document.querySelector("#players-initials").value;
    displayScore = score;
    if (playersIn === "") {
      alert("error", "Email cannot be blank");
    } else {
      alert("You have successfully saved your score!");
  
    localStorage.setItem("players-initials",playersIn);
    localStorage.setItem("displayScore",displayScore);
    }
  });  

//viewing past scores function
  submitButton.addEventListener("click", function(event) {
        // event.preventDefault();
        card.style.display = "inline-block";
        saveContainerText.style.display = "none";
        let pastInt = document.querySelector("#pastInt");
        let pastScore = document.querySelector("#pastScore");
        let get = localStorage.getItem('players-initials');
        let score = localStorage.getItem('displayScore');

        console.log(get);
        console.log(score);

        // If they are null, return early from this function
        if (get && score === null){
            return console.log("null")
        } else {
            pastInt.textContent = get;
            pastScore.textContent = score;
        }
  });


startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startQuiz);




    
