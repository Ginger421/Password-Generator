// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//what I've done is below this line
//define characters that password can contain

const lettersLowerCase = "abcdefghijklmnopqrstuvwxyz";

const lettersUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const specialCharacters = "!@#$%^&*-_=";

const numbers = "1234567890";

//first argument propmt label that displays textbox 

var lowerCase = prompt("Include lower case letters?",  
"abcdefghijklmnopqrstuvwxyz");

var upperCase = prompt("Include upper case letters?",
"ABCDEFGHIJKLMNOPQRSTUVWXYZ");

var specialCharacters = prompt("Include special characters?", 
"!@#$%^&*-_=")

var numbers = prompt("Include numbers?", "1234567890")