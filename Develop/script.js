// Assignment Code
var generateBtn = document.querySelector("#generate");

//assign each potential part of the password to a variable
var upperCase
var lowerCase
var specialCharacters
var numbers
var length 


function charPrompt (params) {
  upperCase = confirm("Has uppercase characters?");
  lowerCase = confirm("Has lowercase letters?");
  specialCharacters = confirm("Has special characters?");
  numbers = confirm("Has numbers?");
  length = prompt("How long do you want your password to be?");
  console.log(upperCase, lowerCase, numbers, specialCharacters, length);
}
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   var passwordLength = 

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//variables for the password

// var lowerCase = ["Include lower case letters?",  
// "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 
// var upperCase = prompt("Include upper case letters?",
// "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

// var specialCharacters = prompt("Include special characters?", 
// "!@#$%^&*-_=")

// var numbers = prompt("Include numbers?", "1234567890")

// var index = Math.floor(Math.random() * lowerCase.length);
//   var computerChoice = options[index];
