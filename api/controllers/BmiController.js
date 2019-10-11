var express = require("express");
var app = express();

app.get('/getBMI', function (req, res) {   
   inputWeight = req.query.weight;
   inputHeight = req.query.height;
   if (!inputWeight || !inputHeight || isNaN(inputWeight) || isNaN(inputHeight)) {
      var output = "Please input valid data";
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<head><style>body{background-color: #E0FFFF;}</style></head><body><center><h2>Please input valid data</h2></center></body>');
        res.end();
        return output;
    }
    else{
    var bmi = Math.round(inputWeight / (inputHeight * inputHeight));
    var condition;

      if(bmi>25 && bmi<=30 ){
        condition = 'Overweight';
      }
      else if(bmi<25 && bmi>18.5 ){
        condition = 'Normal (Healthy Weight)';
      }
      else{
        condition = 'Underweight';
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<head><style>body{background-color: #E0FFFF;}</style></head><body><center><h2>Your BMI is '+bmi+'<br>And you are '+condition+'</h2></center></body>');
      res.end();
      return bmi;
  }  
});
app.listen(8081);
module.exports = app;