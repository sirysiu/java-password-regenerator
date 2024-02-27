  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  if (!hasLowercase || !hasUppercase) {
    alert ("Choose at least one character type.");
    return;
  }
  
  if (hasLowercase ) {
    possible += lowercase;
  }
  
  if (hasUppercase) {
    possible += uppercase;
  }
  
  
    var lengthInput=12;
    var hasLowercase = true;
    var hasUppercase= true;
    var hasNumeric= false;
    var hasSpecial= false;
  
    for (var i = 0; i < lengthInput; i++) {
      var random = Math.floor(Math.random() * lowercase.length);
      password += possible[random];
    }

    document.getElementById('password.').value
      password;
  

  }
   
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button

  const resultEl = document.getElementById('result'); 
const lengthEl = document.getElementById('length'); 
const uppercaseEl = document.getElementById('uppercase'); 
const lowercaseEl = document.getElementById('lowercase'); 
const numbersEl = document.getElementById('numbers'); 
const symbolsEl = document.getElementById('symbols'); 
const generateEl = document.getElementById('generate'); 


generateBtn.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;
});