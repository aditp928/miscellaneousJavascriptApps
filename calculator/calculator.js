const express = require('express')
const bodyParser = require('body-parser');

const app = express ();

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function (req,res){
res.sendFile(__dirname +'/index.html')
})

app.post('/',function(req,res){
    let num1 = parseFloat(req.body.num1)
    let num2 = parseFloat(req.body.num2)
    
   let result = num1 + num2;
   res.send('The sum of these two numbers are: ' + result)
})


app.get('/bmicalculator', function(req,res){
res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', function(req,res){
let weight =parseInt(req.body.weight)
let height = parseInt(req.body.height)
let bmi = 703 *((weight)/(Math.pow(height,2)))
res.send('Your BMI is ' + bmi + ' where bmi is equal to the calculated BMI based on their weight and height inputs')
})

app.listen(3000, function (){
 console.log("Server has started on PORT 3000")
})