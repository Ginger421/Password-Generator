
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("#password");
var password = "";
//assign each set of characters to a variable that the users picks from
var upperCase;
var lowerCase;
var specialCharacters;
var numbers;
var userLength;

//ask the users which characters to include in password
function charPrompt (params) {
  upperCase = confirm("Has uppercase characters?");
  lowerCase = confirm("Has lowercase letters?");
  specialCharacters = confirm("Has special characters?");
  numbers = confirm("Has numbers?");
  userLength = parseInt(prompt("How long do you want your password to be?"));

  //check to make sure user length is a numebr
  if (isNaN(userLength)===true || userLength < 8 || userLength > 128) {
    alert("password length is not valid")
    charPrompt()
  }
};

//all varaibles that represent potential characters to be included in password
  let nums = "1234567890"
  let ucLetters = "QWERTYUIOPASDFGHJKLZXCVBNM"
  let lcLetters = "qwertyuioplkjhgfdsazxcvbnm"
  let special = "!@#$%^&*()"
  let userChoice = ""

  //function that generates password and puts parts together
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


// Add event listener to generate button when clicked call prompts and generatepassword functions 
generateBtn.addEventListener("click", () => {
  charPrompt()
  generatePassword()
  document.getElementById("password").textContent = password;
});

