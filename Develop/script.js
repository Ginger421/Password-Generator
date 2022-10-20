// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("#password");
var password = "";
//assign each potential part of the password to a variable
var upperCase;
var lowerCase;
var specialCharacters;
var numbers;
var userLength;


function charPrompt (params) {
  upperCase = confirm("Has uppercase characters?");
  lowerCase = confirm("Has lowercase letters?");
  specialCharacters = confirm("Has special characters?");
  numbers = confirm("Has numbers?");
  userLength = parseInt(prompt("How long do you want your password to be?"));
  //console.log(upperCase, lowerCase, numbers, specialCharacters, userLength);

  if (isNaN(userLength)===true || userLength < 8 || userLength > 128) {
    alert("password length is not valid")
    charPrompt()
  }
};

  let nums = "1234567890"
  let ucLetters = "QWERTYUIOPASDFGHJKLZXCVBNM"
  let lcLetters = "qwertyuioplkjhgfdsazxcvbnm"
  let special = "!@#$%^&*()"
  let userChoice = ""

function generatePassword() {


  //console.log(nums, ucLetters, lcLetters, special, userChoice)

  if (upperCase) {
    userChoice += ucLetters;
    //console.log(userChoice)
  }
  if (lowerCase) {
    userChoice += lcLetters
  }
  if (specialCharacters) {
    userChoice += special
  }
  if (numbers) {
    userChoice += nums
  }
  //console.log(userChoice)

  for (let i = 0; i < userLength; i++) {
    let randomIndex = Math.floor(Math.random() * userChoice.length)
    
    let randomCharacter = userChoice[randomIndex]

    password = password + randomCharacter;
  }

  console.log(password)

  return password
  
  
};


// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  charPrompt()
  generatePassword()
  document.getElementById("password").textContent = password;
});

