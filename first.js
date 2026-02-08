
//task 1 printing welcome message
console.log("Hello, My name is Nffaisal and this is me learning javascript basics");
//task 2: assigning variables and printing
let name = "nffaisal";
let city="Islamabad";
let age =18;
console.log("My name is "+ name  +"and my age is " + age + " and i live in "+ city+ ".");
//task 3 addition, subtraction and division on two numbers
let x= 10;
let y=2;
console.log(x +y );
console.log(x - y);
console.log(x/y);
console.log(x*y);
//task 4 asking for user name and showing it on screen
let userName = prompt("what is your name?");
alert("Your name is " + userName);
//task 5 check if user is eligible to vote
let userAge =prompt("what is your age? ");
if(userAge <18){
    alert("You are eligible to vote");
}else{
    alert("You are not eligible to vote");
}
//task 6 check if number is even or odd
let number =prompt("enter a number to check if its even or odd: ");
if(number % 2 ==0){
    alert("the number is even");
}else{
    alert("the number is odd");
}
//task 7 simple calculator
let num1 = prompt("Enter first number: ");
let num2 =prompt ("enter second number: ");
let operator =prompt("enter operation you want to do: ");
num1 =Number(num1);
num2=Number(num2);
let result;
if (operator ==="+"){
    result = num1 + num2;
}else if(operator === "-"){
    result =num1 - num2;
}else if(operator === "/"){
    result =num1 /num2;
}else if(operator ==="*"){
    result =num1 *num2;
}else{
    console.log("invalid operator ");
}
console.log(result);
//task 8 looping numberd till 10
for(let i =1;i<=10;i++){
    console.log(i);
}
//task 9 array of fruits and looping over it
const fruits =["apple", "guava" , "banana", "kiwi","mango"];
for(let j=0;j<fruits.length;j++){
    console.log(fruits[j]);
}
//task 10 function to add numbers
function add(num1,num2){
    let result = num1 +num2;
    return result;
}
let num3= prompt("enter first number");
let num4 =prompt("enter a second number");
alert("the result is " + add(num3,num4));
