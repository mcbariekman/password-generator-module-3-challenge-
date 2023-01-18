// Assignment code here
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)=>
{const availableChars =[
  ...(includeUppercase ? uppercaseLetters: []),
  ...(includeNumbers ? numbers: [])
  ...(includeSymbols ? symbols: [])
];
}

console.log(availableChars)

generatePassword(12, true, true, true, true, true);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

console.log(generateBtn)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(inputtxt.value.match(passw)) 
  { 
  alert('Correct, try another...')
  return true;
  }
  else
  { 
  alert('Wrong...!')
  return false;
  }
  }

console.log(passwordText)

/* function display() {
  var x = document.getElementById("myPsw").value;
}
*/ 