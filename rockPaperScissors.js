const express = require('express');
const app = express();

const game = (you, ai) => {

  if ((you === "rock" && ai === "scissors") || (you === "scissors" && ai === "paper") || (you === "paper" && ai === "rock")) {
    return `Congratulations! You won!`

  } else if ((you === "rock" && ai === "paper") || (you === "paper" && ai === "scissors") || (you === "scissors" && ai === "rock")) {
    return `You lost. Try again!`

  } else {
    return `We tied!`
  }
}

const ai = () => {
  let randomizer = Math.floor(Math.random() * 3);
  let arrChoice = ["rock", "paper", "scissors"];
  let compChoice = arrChoice[randomizer]
  return compChoice;
}


app.get('/:shoot', (req, res) => {
  res.send(`You picked:  ${req.params.shoot}. \n AI picked: ${ai()}. \n ${game(req.params.shoot, ai())}`)

})


app.listen(8000, () => {
  console.log("you are listening to port 8000");
})
