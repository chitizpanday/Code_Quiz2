const quizDB = [
    {
        question: "Q1: What is the correct JavaScript syntax to write'Hello World?",
        a: 'response.write("Hello World")',
        b: "Hello World",
        c: 'document.write("Hello World")',
        d: '("Hello World")',
        ans:'("Hello World")'
    },

    {
        question: "Q2: How do you call a function named 'myFunction'?",
        a: 'call myFunction()',
        b: 'myFunction()',
        c: 'call function myFunction',
        d: 'Call.myFunction()',
        ans:'myFunction()'
    },

    {
        question: "Q3: What is the command to display a prompt?",
        a: 'prompt("Text Here")',
        b: 'write("Text Here")',
        c: 'alert("Text Here")',
        d: 'confirm("Text Here")',
        ans:'prompt("Text Here")'
    },

    {
        question: "Q4: What is a variable?",
        a: 'Temporary data storage that can not be altered, or varied.',
        b: 'Permanent data storage that can be altered, or varied.',
        c: 'Temporary data storage that can be altered, or varied.',
        d: 'data storage that can not be resued.',
        ans:'Temporary data storage that can be altered, or varied.'
    },

    {
        question: "Q5: A technology that allows greater style definition and formatting control of HTML elements.",
        a: 'HTML',
        b: 'CSS',
        c: 'Javascript',
        d: 'SQL',
        ans: 'CSS'
    }
]
 //collecting references form index.html
const question = document.querySelector('.question');
const option1 =  document.querySelector('#option1');
const option2 =  document.querySelector('#option2');
const option3 =  document.querySelector('#option3');
const option4 =  document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionlist = quizDB[questionCount];
    question.innerHTML = questionlist.question;

    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}
loadQuestion ();

const getCheckAnswer = () => {
     let answer;
    answers.forEach ((curAnsElem) => {
        if(curAnsElem.checkedAnswer){
            answer=curAnsElem.id;
        }
     });
     return answer;
};
 submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    if(questionCount < quizDB.length){
        loadQuestion();
    
      }else{
        
        timeup()
    }
});

function timeup() {
    // user cannot answer anything => hide question
    // show score and a form with name and button
    // hide div with class inner-div
    document.getElementById("questions").style.display = "none";
    document.getElementById("score").style.display = "block";

    const showScore = document.querySelector('#showScore');
    showscore.innerHTML= `<h3>You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick='location.reload()'></button>`;
    
    document.getElementById("save-score").addEventListener("click", function() {
        // save initials in localstorage
        // get initials
        var initialsInput = document.getElementById("initials").value
        // save those in localstorage
        var currentHighscores = localStorage.getItem("highscores") ? JSON.parse(localStorage.getItem("highscores")) : [];
        currentHighscores.push({initials: initialsInput, score: score})
        localStorage.setItem("highscores", JSON.stringify(currentHighscores));

        for(var i = 0; i< currentHighscores.length; i++) {
            console.log("initials", currentHighscores[i].initials, "score", currentHighscores[i].score)
        }
    })
    
}



var total_seconds = 60*5;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);
function checkTime(){
    document.getElementById("timer").innerHTML= 'Time Left: ' + c_minutes + 'minutes  ' + c_seconds + 'seconds';
    if(total_seconds <= 0){
        timeup()
        
    
    }
    else{
        total_seconds=total_seconds-1;
        c_minutes = parseInt(total_seconds/60);
        c_seconds = parseInt(total_seconds%60);
        setTimeout(checkTime,1000)
    }
}
setTimeout(checkTime,1000);
// setInterval




