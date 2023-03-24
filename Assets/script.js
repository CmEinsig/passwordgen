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
special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')','(','}','{',']', '[', '~', '-', '_', '.',];


// Write password to the #password input
var generatepassword =function () {
var length = window.prompt("Enter a password length between 8 and 128 characters")
var lowercase = window.confirm("Do you want lowercase letters? If no, click cancel")
var uppercase = window.confirm("Do you want uppercase letters? If no, click cancel")
var numbers = window.confirm("Do you want to use numbers? If no, click cancel")
var special = window.confirm("Do you want to use special characters? If no, click cancel")

  // Password Length
  var length = parseInt(prompt("Enter a password length between 8 and 128 characters"));
  var finalChar = [];
  var possibleChar = [];
  var options = [];
if(Number.isNaN(length)){
    alert("Password length must be a number");
    generatePassword();
  }
if(length > 8 || length > 128)
  {
    alert("Password length must be between 8 and 128 characters");
    generatePassword();
  }

  if(uppercase === false && lowercase === false && special === false && numbers === false)
  {
    alert("You must select at least one option");
    generatePassword();
  }
  
  if(uppercase)
  {
    options = options.concat(uppercase);
    finalChar.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    console.log(options);
    console.log(finalChar);
  }
  if(lowercase)
  {
    options = options.concat(lowercase);
    finalChar.push(lowercase[Math.floor(Math.random() * lowerChar.length)]);
    console.log(options);
    console.log(finalChar);
  }
  











  for(var i=0; i<length; i++){
    possibleChar.push(options[Math.floor(Math.random() * options.length)]);
    console.log(possibleChar);
  }
  
  for(var i=0; i<finalChar.length;i++)
  {
    possibleChar[i] = finalChar[i];
  }
  
  // final password
    return possibleChar.join("");
  }


  var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatepassword ()