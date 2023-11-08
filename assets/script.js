  // Assignment Code
  var password = document.getElementById("password");

  function generatePassword(){
    var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*().?ABCDEFGHIJKLMKNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";

    for (var i = 0; i <= passwordLength; i++){
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("password").value = password;
  }



  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  // generateBtn.addEventListener("click", writePassword); 