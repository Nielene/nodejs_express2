const express = require('express');
const app = express();


app.get('/:shoot', (req, res) => {
  let rock = [
    {"user":"rock","ai":"rock","result":"tie"},
    {"user":"rock","ai":"paper","result":"lose"},
    {"user":"rock","ai":"scissors","result":"win"}
  ]
  let paper = [
    {"user":"paper","ai":"paper","result":"tie"},
    {"user":"paper","ai":"scissors","result":"lose"},
    {"user":"paper","ai":"rock","result":"win"}
  ]
  let scissors = [
    {"user":"scissors","ai":"scissors","result":"tie"},
    {"user":"scissors","ai":"rock","result":"lose"},
    {"user":"scissors","ai":"paper","result":"win"}
  ]

  if (req.params.shoot === "rock") {
    res.json(rock[Math.floor(Math.random() * 3)])
    // ai = rock[randomizer]
  } else if (req.params.shoot === "paper") {
    res.json(paper[Math.floor(Math.random() * 3)])
    // return ai = paper[randomizer]
  } else {
    res.json(scissors[Math.floor(Math.random() * 3)])
    // return ai = scissors[randomizer]
  }
})


app.listen(8000, () => {
  console.log("you are listening to port 8000");
})
