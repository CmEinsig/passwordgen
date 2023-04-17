//List of variables 
var generateBtn = document.querySelector("#generate");
//Arrays for computer to choose from 
length = [8 <= 128]
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
numbers = [1,2,3,4,5,6,7,8,9]
special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')','(','}','{',']', '[', '~', '-', '_', '.',];

 // Password Length
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;
var password = []

// declartion of the function
function generatePassword() {
  enter = prompt("Between 8 and 128 characters. Please enter how long you would like your password to be");
  if (!enter) {
    // alerts the user if condition is not met
    alert("This needs a value");
    // warns the user that the condition must be between 8 and 128
  } else if (enter < 8 || enter > 128) {
    enter = prompt("Number must be between 8 and 128 characters.");
    return;
  } else {
// User password information
confirmNumber = confirm("Do you want to use numbers?");
confirmCharacter = confirm("Do you want to use special characters?");
confirmLowercase = confirm("Do you want to use lowercase letters?");
confirmUppercase = confirm("Do you want to use uppercase letter?");
};

if (!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase) {
  // warns user if all criterias are false
  choices = alert("You must choose at least one option!")
  return``;
  // Pathways for different user input options 
} else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = special.concat(numbers, lowercase, uppercase);
  // Password contains special characters, numbers and uppercase 
} else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = special.concat(numbers, uppercase);
// Password contains special characters, number and lowercase 
} else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = special.concat(numbers, lowercase);
//Password contains numbers, upper and lower case 
} else if (confirmNumber && confirmUppercase && confirmLowercase) {
  choices = numbers.concat(lowercase, uppercase);
//Password contains numbers and special characters  
} else if (confirmCharacter && confirmNumber) {
  choices = special.concat(numbers);
  // Password contains special characters and lowercase 
} else if (confirmCharacter && confirmLowercase) {
  choices = special.concat(lowercase);
//Password contains special characters and uppercase 
} else if (confirmCharacter && confirmUppercase) {
  choices = special.concat(uppercase);
//Password contains lowercase and numbers 
}else if (confirmLowercase && confirmNumber) {
  choices = lowercase.concat(numbers);
//Password contained lower and upper case 
} else if (confirmLowercase && confirmUppercase) {
  choices = lowercase.concat(uppercase);
//Password contains numbers and uppercase 
} else if (confirmNumber && confirmUppercase) {
  choices = numbers.concat(uppercase);
 // Password only contains special characters 
} else if (confirmCharacter) {
  choices = special;
//Password only contains numbers 
} else if (confirmNumber) {
  choices = numbers;
//Password only contains lowercase
} else if (confirmLowercase) {
  choices = lowercase;
//Password only contains uppercase 
}else if (confirmUppercase) {
  choices = uppercase;
}
for (var i = 0; i < enter; i ++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)]
  password.push(pickChoices);
}
return password.join('');
}

//Generates password to user 
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

}// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatepassword ()