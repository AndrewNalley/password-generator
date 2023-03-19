// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordNumber;
  // Password character length function that only allows between 8 and 128 characters.
  do {
    var passwordLengthStr = prompt("Please enter your password character length. (It must have at least 8 characters and no more than 128 characters.)");
    var passwordNumber = Number(passwordLengthStr);
    var lengthFeedback = (passwordNumber >= 8 && passwordNumber <= 128) ? "Thank you - You have chosen to include " + passwordNumber + " characters. Now we will ask about the character types you wish to use!" : "Please choose a password length of at least 8 characters and no more than 128 characters.";
    alert(lengthFeedback);
  } while (passwordNumber < 8 || passwordNumber > 128);
  // Prompts to determine character types included in password. Each answer is confirmed.
  var lowerCaseFeedback;
  if (confirm("Include lowercase letters? OK = YES, cancel = NO")) {
    lowerCaseFeedback = true;
    alert("You have chosen to include lowercase letters.");
  } else {
    lowerCaseFeedback = false;
    alert("You have chosen NOT to include lowercase letters.");
  }

  var upperCaseFeedback;
  if (confirm("Include uppercase letters? OK = YES, cancel = NO")) {
    upperCaseFeedback = true;
    alert("You have chosen to include uppercase letters.");
  } else {
    lowerCaseFeedback = false;
    alert("You have NOT chosen to include uppercase letters.")
  }

  var numericFeedback
  if (confirm("Include numbers? OK = YES, cancel = NO")) {
    numericFeedback = true;
    alert("You have chosen to include numbers.");
  } else {
    numericFeedback = false;
    alert("You have NOT chosen to include numbers.")
  }

  var specialCharacterFeedback
  if (confirm("Include special characters? OK = YES, cancel = NO")) {
    specialCharacterFeedback = true;
    alert("You have chosen to include special characters.");
  } else {
    specialCharacterFeedback = false;
    alert("You have NOT chosen to include special characters.")
  }

  // Character types selected by user are added to the totalChars variable.
  var totalChars = "";
  if (upperCaseFeedback === true) {
    totalChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };
  if (lowerCaseFeedback === true) {
    totalChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numericFeedback === true) {
    totalChars += "0123456789";
  }
  if (specialCharacterFeedback === true) {
    totalChars += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  // Password generator
  if (totalChars.length > 0) {
    var password = "";
    for (var i = 0; i < passwordNumber; i++) {
      var randomNumber = Math.floor(Math.random() * totalChars.length);
      password += totalChars.substring(randomNumber, randomNumber + 1);
    }
  } else {
    alert("Please choose at least one of the character types.")
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
