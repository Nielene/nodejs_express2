const express = require('express');
const app = express();

app.get("/:num1/:operator/:num2", (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  let operator = req.params.operator;

  if (operator === "add") {
    res.json(`{ num1: ${parseInt(num1)}, operator: ${operator}, num2: ${parseInt(num2)}, result: ${parseInt(num1) + parseInt(num2)} }`)
  } else if (operator === "sub") {
    res.json(`{ num1: ${parseInt(num1)}, operator: ${operator}, num2: ${parseInt(num2)}, result: ${parseInt(num1) - parseInt(num2)} }`)
  } else if (operator === "mul") {
    res.json(`{ num1: ${parseInt(num1)}, operator: ${operator}, num2: ${parseInt(num2)}, result: ${parseInt(num1) * parseInt(num2)} }`)
  } else if (operator === "div") {
    res.json(`{ num1: ${parseInt(num1)}, operator: ${operator}, num2: ${parseInt(num2)}, result: ${parseInt(num1) / parseInt(num2)} }`)
  } else if (operator !== "add" || operator !== "sub" || operator !== "mul" || operator !== "div") {
    res.json(`the operator is not supported. Use: add or sub or mul or div`)
  } else if (isNaN(num1) || isNaN(num2)) {
    res.json(`number / operator / number`)
  }

})

app.get('/*', (req, res)=> {
  res.json(`This is not a valid route for this api. The valid route format is num1/operator/number. Try http://localhost:8000/2/+/4`)
})

app.listen(8000, () => {
  console.log("Listening on port 8000...");
})
