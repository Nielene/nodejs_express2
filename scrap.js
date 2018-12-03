const ai = () => {
  let comp = Math.random();

  switch (comp) {
    case comp >= 0.0 && comp <= 0.33: r
      break;
    case comp >= 0.34 && comp <= 0.66: p
      break;
    case comp >= 0.67 && comp <= 1: s
      break;
    default:
      null;
  }
}


if ((you === "rock" && ai === "scissors") || (you === "scissors" && ai === "paper") || (you === "paper" && ai === "rock")) {
  return `Congratulations! You won!`

} else if ((you === "rock" && ai === "paper") || (you === "paper" && ai === "scissors") || (you === "scissors" && ai === "rock")) {
  return `You lost. Try again!`

} else {
  return `We tied!`
}



  // res.send(`You picked:  ${req.params.shoot}. \n AI picked: ${ai()}. \n ${game(req.params.shoot, ai())}`)
