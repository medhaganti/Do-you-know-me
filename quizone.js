var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ");

console.log("Get ready to play " + userName + "!");
console.log("-----------");

var score = 0;

quesOne = {
  ques: "How old am I... mentally? ",
  ans: "55"
}

quesTwo = {
  ques: "Where do I live? ",
  ans: "Dreamland"
}

quesThree = {
  ques: "Who do I hate? ",
  ans: "Self-righteous people"
}

quesFour = {
  ques: "What is my fav color? ",
  ans: "Yellow"
}

quesFive = {
  ques: "What is my fav food? ",
  ans: "pav bhaji"
}

var quesBank = [quesOne, quesTwo, quesThree, quesFour, quesFive];

for (var i = 0; i < quesBank.length; i++){
  var currentQues = quesBank[i].ques;
  var currentAns = quesBank[i].ans;
  var userAns = readlineSync.question(currentQues);
  function play(ques, ans){
    if (userAns.toUpperCase() === currentAns.toUpperCase()){
      console.log("You are correct!");
      score = score + 1;
    } else {
      console.log("You are wrong :(");
      score = score - 1;
    }
  }
  play(currentQues, currentAns);
} console.log("You score: " + score);

