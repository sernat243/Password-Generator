// Assignment code here

function generatePassword(){
  var passwordLength = prompt("Select Password Length (Please choose a number between 8 and 128)");
  var number = parseInt(passwordLength);
 
  if (!isNaN(number) && number >=8 && number <= 128) {
    let lowercase = confirm ("Do you want to include Lowercase Characters?");
    let uppercase = confirm ("Do you want to include Uppercase Characters?");
    let numeric = confirm ("Do you want to include Numeric Characters?");
    let special = confirm ("Do you want to include Special Characters?");
  
    if (!lowercase && !uppercase && !numeric && !special) {
      alert("You must select at least one Character Type");
      return null;

    } else {
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numericChars = '0123456789';
      const specialChars = '!@#$%^&*';

      let pool = '';
      if (lowercase) {
        pool += lowercaseChars;
      }
      if (uppercase) {
        pool += uppercaseChars;
      }
      if (numeric) {
        pool += numericChars;
      }
      if (special) {
        pool += specialChars;
      }
      let word = '';
      for (let i = 0; i < number; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        word += pool[randomIndex];
      }
      return word;
    }

  } else if (passwordLength === null) {
      return null;
  }
  
    else {
    alert("Invalid Answer");
    return null;

  }
  
}


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
