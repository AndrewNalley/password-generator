// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var passwordNumber;
    do {
    var passwordLengthStr = prompt("Please enter your password character length. (It must have at least 8 characters and no more than 128 characters.)");
    var passwordNumber = Number(passwordLengthStr);
    var lengthFeedback = (passwordNumber >= 8 && passwordNumber <= 128) ? "Thank you. Now we will ask about the character types you wish to use!" : "Please choose a password length of at least 8 characters and no more than 128 characters.";
    alert(lengthFeedback); 
    } while (passwordNumber < 8 || passwordNumber > 128);

    var lowerCaseFeedback = confirm("Include lower case letters? OK = YES, cancel = NO");
    var upperCaseFeedback = confirm("Include upper case letters? OK = YES, cancel = NO");
    var numericFeedback = confirm("Include numbers? OK = YES, cancel = NO");
    var specialCharacterFeedback = confirm("Include special characters? OK = YES, cancel = NO");



  var password = generatePassword(passwordNumber);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(length) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
