const express = require("express");
const app = express();

app.get('/:number/:base', (req, res)=> {
  let number = req.params.number;
  let base = req.params.base
  if (base === "2" || base === "bin") {
    res.json(
      `{original:{value: ${number}, base: ${base} }, conversions: { decimal: ${parseInt(number, 2)}, binary: ${number} , hex: ${parseInt(number, 2).toString(16)} } }`
    )
  } else if (base === "16" || base === "hex") {
    res.json(
      `{original:{value: ${number}, base: ${base} }, conversions: { decimal: ${parseInt(number, 16)}, binary: ${parseInt(number, 16).toString(2)} , hex: ${number} }}`
    )
  } else if (base === "10" || base === "dec" || base === "") {
    res.json(
      `{original:{value: ${number}, base: ${base} }, conversions: { decimal: ${number}, binary: ${number.toString(2)} , hex: ${number.toString(16)} }}`
    )
  }
})

app.get('/*', (req, res) => {
  res.json(`use this format: localhost:8000/{number}/{bin|dec|hex eg.:localhost:8000/11/bin`)
})

app.listen(8000, () => {
  console.log("Your are listenting to: port 8000");
})
