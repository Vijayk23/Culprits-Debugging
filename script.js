//fix js
alert("I’m invoked!");

//Explain 
alert("I'm JavaScript!");
alert('Hello'); // this line is not having semicolon
alert('World');// this line is not having semicolon
alert(3 +1+ 2); // this is multiple line code and its working

//print guvi geek

fname = "Guvi";
lname = "geek";
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"


// <!-- print hello guvi geek -->


let fname=10.5; 
fname = "Guvi";
lname = "geek";
let name = fname+" " +lname;
alert( `hello ${name}`);

// sum of two number

let a =parseInt( prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a+b);

//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.


var ab = "2" > "12"; 
//the Values are mentioned in the string format so we get "code is blasted"
// convert string to number we will get "diffused" 
//Don't touch below this
if (ab) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//How to get the correct score in console.


let value = prompt('How many runs you scored in this ball');
if (value === "4") {
      console.log("You hit a Four");
} else if (value ===  "6") {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

//Fix the code to welcome the boss


let message;
let lock = "";
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);


//Fix the code to welcome the boss


let message1;
let lock1 = "";
//Dont change any code below this
if (lock1 && " " || undefined )
{
  message1 = "Go away";
}
else
{
 message1 = "welcome";
}
console.log(message1);

//Change the code to print all the gifts


let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i <3 ; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

//Change the code to print 1 to 10 in 4 lines


let num = 1;
num1 = 1 + num;
num2= 1 + num1;
console.log(num, num1, num2)
num3 = 1 + num2;
num4= 1 + num3;
num5= 1+num4
console.log(num3, num4, num5)
num6 = 1 + num5;
num7= 1 + num6;
num8= 1+num7
console.log(num6, num7, num8)
num10= 1+num8
console.log(num10)



//write code to print 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "1";
 
for (var i = 1; i <11; i++) {
 new_string += numsArr[i] 
}
console.log(parseInt(new_string));

//write code to print 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "1,";
 
for (var i = 1; i < 11; i++) {
 new_string += numsArr[i]+ ","
}
console.log(new_string);

//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

var new_string = "";
 
for (var i = 11; i>0; i--) {
 new_string += i + " "
}
console.log(new_string.trim());


//Write a code to replace the array value — If the number is even, replace it with ‘even’.


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

//Write a code to add all the numbers in the array



let  numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = 0 
  for (let i = 0; i < 
  numsArr.length; i += 1) {

  sum += numsArr[i]

  }
console.log(sum);

//Write a code to add the even numbers only


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1=0;
for (var i = 0; i<numsArr.length; i++) {
 if(numsArr[i]%2==0){
 sum1 += numsArr[i]
}
}
console.log(sum1);


//Write a code to add the even numbers and subract the odd numbers

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum2=100;
for (var i = 0; i<numsArr.length; i++) {
 if(numsArr[i]%2!=0){
 sum2 += numsArr[i]
 }
 else
 {
 sum2 -= numsArr[i]
 }
}
console.log(sum2);

//Write a code to print inner arrays

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++){
 console.log( numsArr[i])
}

//Write a code to print elements in the inner arrays


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];

 for(var j = 0 ; j < inner_array.length;j++ ){
     str_all += inner_array[j];
}
}  
console.log(parseInt(str_all));

//Write a code to replace the array value — If the index is even, replace it with ‘even’.

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
    if(inner_array[j] %2 == 0 )
 {
 inner_array[j] = "even"
 }
}
}
console.log(numsArr);

//Write a code to print elements in the inner arrays in reverse

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=[];
for (var i= numsArr.length-1;i>=0; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- ){
    str_all += " " + inner_array[j];
   
}
}
console.log(str_all);


//Fix the code to get the largest of three.
aa = (f,s,t) => {
 
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f);}
    else if(s>f && s>t){
    console.log(s);}
    else{
    console.log(t);}
   }
   aa(1,2,3);


//Fix the code to gen Title caps.


   var arro = ["guvi", "geek", "zen", "fullstack"];
   function ano(arro) {
    for (var i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].slice(1));
    }
   }
   ano(arro);

  //  Fix the code to sum the number in that array

 const num1 = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum22 = (a, b) => a + b
const sum1 = num1.reduce(sum22)
console.log(sum1);
   
//print all odd numbers in an array using IIFE function


var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 != 0) {
 console.log(arr[i]);
 }}
})();

//Fix the code to reverse.


(function(str){
  str1 = str.split("").reverse().join("");
  console.log(str1); 
 })("abcd")

