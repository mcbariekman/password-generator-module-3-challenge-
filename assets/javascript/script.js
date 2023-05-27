// Assignment code here
// const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const symbols = "!@#$%&'()*+,-./:;<=>?@";
const passwordText = document.querySelector("#password");;
// const lengthText = document.querySelector("#length");
// const incNumbers = document.documentElementById("numbers");
// const incSymbols = document.documentElementById("symbols");
const generateBtn = document.getElementById("generate");

// Get references to the #generate element
generateBtn.addEventListener("click", () => {
  // let characters = chars;
  // incNumbers.checked ? (characters += numbers) : "";
  // incSymbols.checked ? (characters += symbols) : "";
  passwordText.value = generatePassword();
});

// Write password to the #password input
const generatePassword = () => {
  var length = window.prompt("choose password length between 8 and 128");
  
  if(length < 8 || length > 128) {
    window.alert("Password length must be between 8 and 128");
    return;
  }
  
  var possibleCharacters = ""

  var includeLower = window.confirm("Would you like to include lowercase letters?");

  if(includeLower) {
    possibleCharacters += lowerChars;
  }

  var includeUpper = window.confirm("Would you like to include uppercase letters?");

  if(includeUpper) {
    possibleCharacters += upperChars;
  }
  
  let password = "";
  for (let i = 0; i < length; i++) {
    password += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    console.log(password);
  }
  return password;
};

// const copyBtn = document.getElementById("copy");
// copyBtn.addEventListener("click", () => {
//   passwordTxt.select();
//   document.commandId("copy");
//   alert("Password Copied");
// });
