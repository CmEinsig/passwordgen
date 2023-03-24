// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordlength = document.getElementById("length");
var includelowercase = document.getElementById("lowercase")
var includeuppercase = document.getElementById("uppercase")
var includenumbers = document.getElementById("numbers")
var specialCharacters =document.getElementById("special")
//Arrays for computer to choose from 
length = [8 <= 128]
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
special = [" !@#$%^&*()"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
