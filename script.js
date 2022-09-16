//1) Perform Prompt with example?
var example=prompt("Enter anything")
document.write(example)
document.write("<br>")


//2)How to parse prompt value in numbers//
var num=prompt("Enter a number")
if (num>=!0){
  document.write("true")
  }
else{
  document.write("false")
  }


//3)What is comparison operators? Define each operator with example?
 
//example of >//
 7>6;
 alert(true)
 //example of >//

 //example of <//
 7<6;
 alert(true)
 //example of <//


 //example of ==//
 6==6;
 alert(true)
 //example of ==//

 //example of ===//
  "6"==6;
 alert(false)
 //example of ==//

 //example of !=//
 "6"==6;
 alert(false)
 //example of ==//



 


//4)What is IF statement define with comparison operator example?//

//example with greater than operator//
var number1=7;
var number2=6;
if(number1>number2){
    document.write("7 is greater")
}
document.write("<br>")

//example with less than operator//
var number1=5;
var number2=6;
if(number1<number2){
    document.write("5 is lesser")
}
document.write("<br>")

//example with greater than equalsto operator//
var number1=7;
var number2=6;
if(number1>=number2){
    document.write("7 is greater than 6 but not equalsto 6")
}
document.write("<br>")

//example with less than equalsto operator//
var number1=6;
var number2=7;
if(number1<=number2){
    document.write("6 is lesser than 7 but not equalsto 7")
}
document.write("<br>")

//example with strick comparison//
var number1="6";
var number2=6;
if(number1===number2){
    document.write("statement is false")
}
document.write("<br>")

//example with notequalsto comparison//
var number1=7;
var number2=6;
if(number1!=number2){
    document.write("statement is false")
}
document.write("<br>")

//5) What is IF ELSE STATEMENT define with example?//

var age = prompt("Enter your age")
if (age >= 18) {
    document.write("You are an adult")
}
else {
    document.write("You are a child")
}
document.write("<br>")

