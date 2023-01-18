// Assignment code here
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var string_length = 8;
var randomstring = Math.random().toString(36).slice(-8);
const specialCharacters = "!@#$%^&*()";

console.log(Math.floor(5));

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  }

generateBtn.addEventListener("click", writePassword);
console.log(generatePassword);
function generatePassword() {
  var passwordLength = prompt("Please enter a password");
}
