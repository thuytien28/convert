xlsxj = require("xlsx-to-json");
xlsxj({
  input: "../xlsx/CRP.xlsx",
  output: "./json/crp.json"
}, function (err, result) {
  if (err) {
    console.error(err);
  } else {
    // console.log(result);
  }
});