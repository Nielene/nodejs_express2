const express = require('express');
const app = express();

app.get('/add/:num1/:num2', (req, res)=> {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  // console.log(typeof num1)
  if (isNaN(num1)|| isNaN(num2)) {
    res.json("numbers only");
  } else {
    res.json(`{ num1: ${parseInt(num1)}, num2: ${parseInt(num2)}, result: ${eval(parseInt(num1) +  parseInt(num2) )} }`);
  }
})

app.get('/sub/:num1/:num2', (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;

  if (isNaN(num1) || isNaN(num2)) {
    res.json("numbers only");
  } else {
    res.json(`{ num1: ${parseInt(num1)}, num2: ${parseInt(num2)}, result: ${eval(parseInt(num1) * parseInt(num2))} }`)
  }
})

app.get('/mul/:num1/:num2', (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;

  if (isNaN(num1) || isNaN(num2)) {
    res.json("numbers only");
  } else {
    res.json(`{ ${}, num2: } `)
  }
})

app.get ('/*', (req, res)=> {
  res.json("This api has four routes: /add, /sub, /mul, and /div. Each of these is followed by two number options of your choice: /add/:num1/:num2. Try http://localhost:8000/add/2/4")
})


app.listen(8000, () => {
  console.log("port 8000");
})
