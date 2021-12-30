

// Assignment code here
const keys = {
  numbers: '0123456789',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  symbols: '!@#$%^&*()_-+=~`{}[]|/?<>,.'
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let password = ''
  let characterStorage = ''

  let pwdLength = prompt("Between 8 and 128 how many characters would you like your password to contain?")
  while (pwdLength < 8 || pwdLength > 128) {
    alert("Your password must be a number between 8 and 128, try again")
    pwdLength = prompt("Between 8 and 128 how many characters would you like your password to contain?")
  }
  let hasNumbers = confirm('Do you want numbers?')
  let hasUpper = confirm('DO you want uppercase letters?')
  let hasLower = confirm('do you want lowercase letters?')
  let hasSpecial = confirm('Do you want special characters?')

  while (!hasNumbers && !hasUpper && !hasLower && !hasSpecial) {
    alert('You must choose at least one character type')
    hasNumbers = confirm('Do you want numbers?')
    hasUpper = confirm('DO you want uppercase letters?')
    hasLower = confirm('do you want lowercase letters?')
    hasSpecial = confirm('Do you want special characters?')
  }


  if (hasSpecial) {
    characterStorage += keys.symbols
  }
  if (hasLower) {
    characterStorage += keys.lowerCase
  }
  if (hasNumbers) {
    characterStorage += keys.numbers
  }
  if (hasUpper) {
    characterStorage += keys.upperCase
  }

  for (var i = 0; i < pwdLength; i++) {
    password += characterStorage.charAt(Math.floor(Math.random() * characterStorage.length))
  }
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
