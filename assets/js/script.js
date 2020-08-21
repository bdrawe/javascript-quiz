
// GLOBAL VARIABLES
//define score and store it in a variable
let score = 0;
let questionContainer = document.querySelector("#display-questions")
//declare your array of objects
let questions = [
    {
        q: "The People of Wakanda speak what language?",
        a: "English",
        b: "African Creole",
        c: "isiXhosa",
        correct: true
    },
    {
        q: "Who is Throg?",
        a: "A frog with the powers of Thor",
        b: "Thor's best friend from the battlefield",
        c: "A creature that lurks in the city of Atalan",
        correct: "A frog with the powers of Thor"
    },
    {
        q: "How did the original Captain Marvel die?",
        a: "Was killed by She Hulk",
        b: "Cancer",
        c: "Nitro the Kree killed her with poison",
        correct: "Cancer"
    }
];

// for(let i = 0; i < questions.length; i++){
    let yay =  function(){
    document.getElementById("display-questions").innerHTML =  questions[0].q;
    }
// }
//FUNCTIONS
// let startGame = function() {
//     let help = document.InnerHTML = "<p> + questions[0].q + </p>";
//     console.log(help);
    


// }

questionContainer.addEventListener("click", yay);

    
