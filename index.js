const express = require('express');
const app = express();


  // {"user": "rock", "ai": "rock", "result": "tie"},
  // {"user":"rock","ai":"paper","result":"lose"},
  // {"user":"rock","ai":"scissors","result":"win"}


const ai = () => {
  let randomizer = Math.floor(Math.random() * 3);
  let arrChoice = ["rock", "paper", "scissors"];
  let compChoice = arrChoice[randomizer]
  return compChoice;
}



app.get('/:shoot', (req, res) => {
  res.send(`You picked:  ${req.params.shoot}  and AI picked:  ${ai()}`)
})

// app.get('/:shoot', (req, res) => {
//   res.send(ai())
// })

app.listen(8000, () => {
  console.log("you are listening to port 8000");
})

// console.log(ai());
