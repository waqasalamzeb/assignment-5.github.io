//1) Perform alert() example?
alert('Assalamualikum')

//2Perform example of variables of string?
var fName="Waqas";
var lName="Zeb"
var fullName=(fName +lName)
document.write(fullName)
document.write("<br");

//3) Perform example of variables of number?

var num1=5;
var num2=20;
var res=(num1+num2)
document.write(res)
document.write("<br>");


 
// 4Perform example of familiar operators?
 //Familiar operator with addition
document.write(20+5)
document.write("<br>")

//Familiar operator with subtraction
document.write(20-5)
document.write("<br>")

//Familiar operator with multiplication
document.write(20*5)
document.write("<br>")

//Familiar operator with diviaion
document.write(20%5)
document.write("<br>")

//Unfimiliar Operators without bodmas//
var num1=5;
var num2=6;
var num3=7;
var num4=8;
var res= (++num1 + num2++ + num1++ + num4++ + num3)
document.write(res)
document.write("<br>")
/*
solution
(++5 + 6++ +5++ + 8++ +7)
(6+6+6+8+7)
Ans=33
*/
//Unfimiliar Operator with bodmas//
var num1=5;
var num2=6;
var num3=7;
var num4=8;
var res= (++num1*num2++ + num1++ + num4++ % num3 + --num3)
document.write(res)
document.write("<br>")
/*
solution
(++5*6++) +5++ + (8++  /7+ --7)
6*6+6+8/7+--7
(8/7+6*6+6+6)
Ans=49

*/

var num1=5;
var num2=6;
var res=(++num1 +num1++ + num2++ + num1++ + num1)
document.write(res)
document.write("<br>")
 
/*
Solution
(++5 +5++ +6++ +5++ +5)
(6+6+6+7+8)
            
*/

//7Perform if & else-if example?

var signal=prompt("Enter color")
if(signal=="red"){
  document.write("Stop")
  }
else if (signal=="yellow"){
    document.write("Start you engine")
    }
else if(signal=="green"){

    document.write("Go")

    }
else{
  document.write("Wrong input")
  }
