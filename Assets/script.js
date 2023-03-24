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
var lowercase = window.prompt("Do you want lowercase letters? type yes or no.")
var uppercase = window.prompt("Do you want uppercase letters? type yes or no.")
var numbers = window.prompt("Do you want to use numbers? type yes or no.")
var special = window.prompt("Do you want to use special characters? type yes or no.")

//convert choices for compare
lowercase = lowercase.toUpperCase();
uppercase = uppercase.toUpperCase();
numbers = numbers.toUpperCase();
special = special.toUpperCase();

if (lowercase === yes){
}
else if (lowercase === no) {
}
else {  
window.prompt ("Please enter yes or no")
}

if (uppercase === yes){
}
else if (uppercase === no) {
}
else {  
window.prompt ("Please enter yes or no")
}

if (numbers === yes){
}
else if (numbers === no) {
}
else {  
window.prompt ("Please enter yes or no")
}

if (special === yes){

}
else if (special === no) {
}
else {  
window.prompt ("Please enter yes or no")
}



passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatepassword ()