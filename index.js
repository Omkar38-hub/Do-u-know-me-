var readlineSync=require("readline-sync");

var highScorer=[
  {
  name:"Omkar",
  score:5,
  },
  {
  name:"Abhijeet",
  score:4,
  },
]
function welcomeMessage()
{
  var userName=readlineSync.question("what is your name? ");
  console.log("Welcome 🙏 "+ userName+" in the world of omkar to test yourself that how much you know him?.");
  console.log("..................................");
}

var score=0;
question1={
  question:"What is my domestic name? ",
  answer:"Abhishek",
}
question2={
  question:"What is my surname? ",
  answer:"Bhagat",
}
question3={
  question:"In which state do I live? ",
  answer:"Bihar",
}
question4={
  question:"What is my favorite color? ",
  answer:"White",
}
question5={
  question:"In which month was I born? ",
  answer:"October",
}

var questions=[question1,question2,question3,question4,question5];

function display(ques,ans)
{
  var userAnswer=readlineSync.question(ques);
  if(userAnswer.toLowerCase()===ans.toLowerCase())
  {
    console.log("Yaah!!🥳🥳 you are RIGHT.");
    score++;
  }
  else
  {
    console.log("Oh! you are WRONG.");
  }
  console.log("Your current score is ",score);
  console.log("..................................");
}
function startGame()
{
   for(let i=0;i<questions.length;i++)
   {
     var currentQues=questions[i];
     display(currentQues.question,currentQues.answer);
   }
}

function displayScore()
{
  console.log("YAY! You SCORED: ", score,"out of 5");
  
  console.log("Check out the high scorers, if you should be there then ping me and I'll update that");
  console.log("..................................");
  console.log("List of top two scorer are");
  highScorer.map(function(score1)
  { 
    console.log(score1.name, " : ", score1.score)
  }
  )
}



welcomeMessage();
startGame();
displayScore();