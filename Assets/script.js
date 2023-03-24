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
numbers = [1,2,3,4,5,6,7,8,9]
special = [" !@#$%^&*()"]

// Write password to the #password input
var generatepassword =function () {
var length = window.prompt("Enter a password length between 8 and 128 characters")
var lowercase = window.prompt ("Do you want lowercase letters?")
var uppercase = window.prompt ("Do you want uppercase letters?")
var numbers = window.prompt ("Do you want to use numbers?")
var special = window.prompt ("Do you want to use special characters?")

 //passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

generatepassword ()