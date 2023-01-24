// Assignment code here
var length = window.prompt("choose password length between 8 and 128");
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbols = "!@#$%&'()*+,-./:;<=>?@";
const passwordText = document.querySelector("#password");;
const lengthText = document.querySelector("#length");
const incNumbers = document.documentElementById("numbers");
const incSymbols = document.documentElementById("symbols");
const generateBtn = document.documentElementById("generate");

// Get references to the #generate element
generateBtn.addEventListener("click", () => {
  let characters = chars;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

// Write password to the #password input
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.commandId("copy");
  alert("Password Copied");
});
