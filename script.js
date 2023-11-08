  // Assignment Code
var generateBtn = document.querySelector("#generate");

const resultEl = document.getElementById('result'); 
const lengthEl = document.getElementById('length'); 
const uppercaseEl = document.getElementById('uppercase'); 
const lowercaseEl = document.getElementById('lowercase'); 
const numbersEl = document.getElementById('numbers'); 
const symbolsEl = document.getElementById('symbols'); 
const generateEl = document.getElementById('generate'); 

// Add event listener to generate button
generateBtn.addEventListener('click', () => {

  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;


resultEl.innerText = generatePassword(
  hasLower, hasUpper, hasNumber, hasSymbols, length);
});



function generatePassword (lower, upper, number, symbol, length) {
  let generatePassword = '';
  
  const typesCount = lower + upper + number + symbol;

  console.log ('typesCount: ',typesCount);

  const typerArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values_items[0]
    );

  // console.log('typesArr:' , typesArr);

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Objects.keys(type)[0];
      // console.log('funcName:' , funcName);

      generatePassword += randomFunc[funcName]();
    })
  }

const finalPassword = generatePassword.slice(0, length);

return finalPassword;

}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()* 26)+ 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()* 26)+ 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()* 10)+ 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()[]{}<>,./?';
  return symbols [Math.floor(Math.random()* symbols.length)];
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




