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
   let result = playRound(window.prompt("Please select Rock, Paper or Scissors"), computerPlay())
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

console.log(game())
