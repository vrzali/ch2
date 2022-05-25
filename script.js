// Assignment code here
const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};
window.alert('Welcome to Password Generator!');
function generatePassword() {
  var passwordInputs = "";

  var length = window.prompt("Enter a number from 8 to 128 for password length.");
  length=parseInt(length);
  while (length < 8 || length > 128) {
    window.alert('The length of the password must be between 8 and 128.');
    length= window.prompt('Enter a number from 8 to 128 for password length.');
    console.log("Password length is " + length);
    }
  var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordInputs += key_strings.lowercase;
  };

  var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordInputs += key_strings.uppercase;
  };

  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    passwordInputs += key_strings.number;
  };

  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    passwordInputs += key_strings.symbol;
  };

  if (numbers , symbols, uppercase, lowercase ===false) {
    window.alert("You need to select at least one type of characters! Please try again.");
    return generatePassword()
  } else {
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordInputs[Math.floor(Math.random() * passwordInputs.length)]
  }
  window.alert('Your password is ' + password);
  return password;
}
}

console.log(generatePassword());


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
