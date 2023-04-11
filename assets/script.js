
var questionZone = document.getElementById('question-container')
var answerZone = document.getElementById('choices-container')
var imageZone = document.getElementById('image-container')
var timerZone = document.getElementById('timer-container')
var scoreZone = document.getElementById('score-container')
var userInput = [];
var timeLeft = "00";
var userName = "";
var ender = false;
var answerChoices = ['button1', 'button2', 'button3', 'button4', 'button5']
for (var i = 0; i < answerChoices.length; i++) {
  var button = document.createElement('button');

}

confirm(" would you like to start the Quiz")
if (confirm) {
  timerCountdown();
}


let questions = [
  {
    question: "In which movie did Arnold Schwarzenegger say 'I need your clothes, your boots, and your motorcycle'?",
    answer: "Terminator 2",
    wrongChoices: ["True Lies", "Kindergarten Cop", "Total Recall"]
  },
  {
    question: "In the movie 'Cast Away' what was the name of Tom Hanks only companion?",
    answer: "Wilson",
    wrongChoices: ["Lt. Dan", "Bubba", "Spaulding"]
  },
  {
    question: "In the movie 'Home Alone' what was the name of Kevin's big brother?",
    answer: "Buzz",
    wrongChoices: ["Fuller", "Marv", "Harry"]

  },
  {
    question: "Who played Jack in the movie 'Titanic'?",
    answer: "Leonardo DiCaprio",
    wrongChoices: ["Johnny Depp", "Brad Pitt", "Matt Damon"]
  },
  {
    question: "In the movie 'The Matrix', what is the name of the main character played by Keanu Reeves?",
    answer: "Neo",
    wrongChoices: ["Morpheus", "Trinity", "Cypher"]
  }
];

var currentQuestionIndex = 0;
var score = 0;
var timerInterval;

showQuestion();


function showQuestion() {

 
  var currentQuestion = questions[currentQuestionIndex];

  
  questionZone.innerHTML = currentQuestion.question;


  var answerChoices = currentQuestion.wrongChoices.slice(); 
  answerChoices.push(currentQuestion.answer); 
  shuffleArray(answerChoices); 

  answerZone.innerHTML = '';
  for (var i = 0; i < answerChoices.length; i++) {
    var button = document.createElement('button');
    button.innerHTML = answerChoices[i];
    button.addEventListener('click', function () {
      if (this.innerHTML === currentQuestion.answer) {
        console.log('Correct!');
        score++;
        scoreZone.innerHTML = 'Score: ' + score;
      } else {
        timeLeft = timeLeft - 15,

          console.log('Incorrect!');
      }
      currentQuestionIndex++;
      if (currentQuestionIndex >= questions.length) {
        console.log('Quiz finished!');
        let ender = true;
        let userName = prompt("Please Enter Name and Social Security Number");
        confirm('your score is: ' + score);
        if (userName && score) {
          let userInput = [(userName + score)];
          console.log("bingo");
          localStorage.setItem("userInput", JSON.stringify(userInput));


          var historyDisplay = document.getElementById("score-history");
          console.log(historyDisplay)
          userInput = localStorage.getItem("userInput");
          var userInputObj = JSON.parse(userInput);
          userInputObj
        }
        if (!confirm) {
          localStorage.clear();
          console.log('input was cleared');
          historyDisplay.innerText = "No Scores";
        }
        alert('please refresh the page to try again.')

      } else {
        showQuestion();
      }
    });
    answerZone.appendChild(button);
  }
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}






var timeLeft = 80;

function timerCountdown() {

  var timeInterval = setInterval(function () {
    if (ender) {
      clearInterval(timeInterval)

      
    }



    if (timeLeft > 1) {
     
      timerZone.textContent = 'Hurry! Only ' + timeLeft + ' seconds left!!!'
      timeLeft--;
    } else if (timeLeft === 1) {
      timerZone.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerZone.textContent = 'better luck next time';
      console.log('timeout');
      alert("sorry it looks like you ran out of time pal. Refresh the page and try again?")

      

      
      clearInterval(timeInterval);
    }
    

  }, 1000);
}
var historyDisplay = document.getElementById("score-history");
console.log(historyDisplay)
userInput = localStorage.getItem("userInput");
var userInputObj = JSON.parse(userInput);
function showScore() {
  document.getElementById('score-history').innerText = userInputObj
  console.log('the score was checked')

}



