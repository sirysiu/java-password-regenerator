  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }

var lowerList = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerList.split("");

var upperList = lowerList.toUpperCase();
var upperArray = upperList.split("");

var numberList = "1234567890"
var numberArray = numberList.split("");

var specialList = " !#$%&'()*+,-./:;<=>?@][^_`{|}~";
var specialArray = specialList.split("");
  
function generatePassword() {

  // this do/while loop ensures that the user puts a value that is between 8 and 128. If they dont, it alerts them of the paramaters and returns the app.
  do {
    var length = prompt("How many characters would you like your password to be?");
    var parsedLength = parseInt(length);

    if (parsedLength >= 8 && parsedLength <= 128 && !isNaN(parsedLength)) {
      console.log("Valid input: " + parsedLength);
    }
    else {
      alert("Please enter a number between 8 and 128.");
      return "Please try again.";
    };
  }
  while (!(parsedLength >= 8 && parsedLength <= 128 && !isNaN(parsedLength)));

  // These are the promts for the user to answer
  var lower = confirm("Would you like to use lower case letters?")
  console.log(lower);

  var upper = confirm("Would you like to use upper case letters?")
  console.log(upper);

  var number = confirm("Would you like to use numbers?")
  console.log(number);

  var special = confirm("Would you like to use special characters?")
  console.log(special);

  // This is the array that will contain our random password.
  let randomPass = [];

  // This is our loop for the password generator based on the length the user provided. 
  for (let index = 0; index < length; index++) {
    // This is the array that will contain all of the caracter strings that are selected by the user. 
    let selectedArrays = [];
    // If the user selects okay, these push the arrays to the randomPass array.
    if (lower) {
      selectedArrays.push(lowerArray)
    }
    if (upper) {
      selectedArrays.push(upperArray)
    }
    if (number) {
      selectedArrays.push(numberArray)
    }
    if (special) {
      selectedArrays.push(specialArray)
    }
    // This randomizes the array, and then chooses a random character from the array, and loops that pattern by the length the user selected. 
    if (selectedArrays.length > 0) {
      let randomArray = selectedArrays[Math.floor(Math.random() * selectedArrays.length)];
      let randomChar = randomArray[Math.floor(Math.random() * randomArray.length)];
      randomPass.push(randomChar);
    }
    // This ensures the user selected atleast one character type, if they did not it alerts them and returns the app. 
    else {
      alert("Please choose atleast one character type.");
      return "Please try again.";
    }
  }
  // This joins the array into a string
  let conPas = randomPass.join("");
  console.log(conPas);

  // This updates the HTML element with the conPas string
  // let passwordElement = document.getElementById("password");
  // passwordElement.value = conPas;

  return conPas; 
}


generateBtn.addEventListener('click', writePassword);