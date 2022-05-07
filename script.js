// Assignment code here
var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var length = 12;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  
  // Random charactes generator 
  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
   passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  password.value = writePassword(length.value, characters);
}
