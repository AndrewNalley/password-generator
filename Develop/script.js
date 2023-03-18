// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordNumber;
    do {
    var passwordLengthStr = prompt("Please enter your password character length. (It must have at least 8 characters)");
    var passwordNumber = Number(passwordLengthStr);
    var lengthFeedback = passwordNumber>= 8?
    "Thank you." :
      "Please choose a password length with at least 8 characters.";
    alert(lengthFeedback);
    } while (passwordNumber < 8);
    
  var password = generatePassword(passwordNumber);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(length) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
