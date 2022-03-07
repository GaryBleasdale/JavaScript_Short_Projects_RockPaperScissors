function computerPlay(){
  let options = ["Rock", "Paper", "Scissors"];
  let randomOption = Math.floor(Math.random()*3);
  return options[randomOption]
}

function playRound(playerSelection,computerSelection){
  playerSelection = playerSelection.toLowerCase()
  if (computerSelection==="Rock")
  switch (playerSelection){
   case 'rock': return 'Try again'
   case 'paper': return 'You won!'
   case 'scissors':  return 'You lost!'
}

if (computerSelection==="Paper")
  switch (playerSelection){
   case 'rock': return 'You lost!'
   case 'paper': return 'Try again'
   case 'scissors':  return 'You won!'
}

if (computerSelection==="Scissors")
  switch (playerSelection){
   case 'rock': return 'You won!'
   case 'paper': return 'You lost!'
   case 'scissors':  return 'Try again'
}
}

function game(){
 let myScore =[];
 let pcScore=[];

 for (i=0;i<5;i++){
   let result = playRound("Rock", computerPlay())
   if (result ==="You won!"){
     myScore.push('1')
   } else if (result === "You lost!"){
     pcScore.push('1')
   } else {
     continue
   }
 }

 return myScore.length>pcScore.length ?  "You won!": "You lost!"


}

function rockCheck(){  
  computerPlay()
  if (computerPlay()==="Scissors"){
    narration.innerHTML=`
    You choose Rock, PC chose Scissors
    You won!
    `
    myScore +=1;
    scoreBoard[0].innerHTML=`
    ${myScore}
    `
  } else if (computerPlay()==="Paper"){
    narration.innerHTML=`
    You choose Rock, PC chose Paper
    You lost!
    `
    pcScore +=1;
    scoreBoard[1].innerHTML=`
    ${pcScore}
    `
  }else {
    narration.innerHTML=`
    You tied!  Please try again.
    `
    }
    check()
  }

  function paperCheck(){
  if (computerPlay()==="Scissors"){
    narration.innerHTML=`
    You choose Paper, PC chose Scissors
    You lost!
    `
    pcScore +=1;
    scoreBoard[1].innerHTML=`
    ${pcScore}
    `
  } else if (computerPlay()==="Rock"){
    narration.innerHTML=`
    You choose Paper, PC chose Rock
    You won!
    `
    myScore +=1;
    scoreBoard[0].innerHTML=`
    ${myScore}
    `
  }else {
    narration.innerHTML=`
    You tied!  Please try again.
    `
    }
    check()
  }

  function scissorsCheck(){
    if (computerPlay()==="Paper"){
      narration.innerHTML=`
      You choose Scissors, PC chose Paper
      You won!
      `
      myScore +=1;
      scoreBoard[0].innerHTML=`
      ${myScore}
      `
    } else if (computerPlay()==="Rock"){
      narration.innerHTML=`
      You choose Scissors, PC chose Rock
      You lost!
      `
      pcScore +=1;
      scoreBoard[1].innerHTML=`
      ${pcScore}
      `
    }else {
      narration.innerHTML=`
      You tied! Please try again.
      `
        
      }
    check()
    }
  


function check(){
  if (myScore===5){
    buttons[0].removeEventListener("click", rockCheck);
    buttons[1].removeEventListener("click", paperCheck);
    buttons[2].removeEventListener("click", scissorsCheck);

    finalResult.innerHTML=`
    Congatulations!  You won the game!
    `
    restartBtn.style.display = "inline"

    container.style.display='none'
  }else if (pcScore ===5){
    buttons[0].removeEventListener("click", rockCheck);
    buttons[1].removeEventListener("click", paperCheck);
    buttons[2].removeEventListener("click", scissorsCheck);

    finalResult.innerHTML=`
    Oh no!  The PC beat you!
    `
    restartBtn.style.display = "inline"
    container.style.display='none'

  }

  }


// DOM objects 

let buttons = document.body.getElementsByTagName('button')
let scoreBoard = document.body.getElementsByTagName('span');
let narration = document.body.querySelector('.narration')
let finalResult =document.body.querySelector('.final-result')
let restartBtn = document.body.querySelector('.restart')
let container = document.body.querySelector('.container')


//Key variables

let myScore = 0;
let pcScore = 0;

//Event Listeners

buttons[0].addEventListener('click', rockCheck);

buttons[1].addEventListener('click', paperCheck)

buttons[2].addEventListener('click', scissorsCheck)

restartBtn.addEventListener('click', function(){
  
  location.reload();
} )


