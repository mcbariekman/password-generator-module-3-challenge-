// Assignment code here
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var length = window.prompt("choose password length between 8 and 128")
char = "abcdefghijklmnopqrstuvwkyz"
num = "1234567890"
passwordText = [""]
 for(i=0;i < length; i++){
   passwordText += char.charAt(Math.floor(Math.random() * char.length))
   return passwordText
 }
};

console.log(Math.floor(5)); 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

console.log(generateBtn)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  }

  console.log(generatePassword)
