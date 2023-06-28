// Assignment code here

function generatePassword(){
  var passwordLength = prompt("Select Password Length (please choose a number between 8 and 128)");
  var number = parseInt(passwordLength);
 
  if (!isNaN(number) && number >=8 && number <= 128) {
    let lowercase = confirm ("do you want to include lowercase characters?");
    let uppercase = confirm ("do you want to include uppercase characters?");
    let numeric = confirm ("do you want to include numeric characters?");
    let special = confirm ("do you want to include special characters?");
  
    if (!lowercase && !uppercase && !numeric && !special) {
      alert("you must select at least one character type");

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
    return "try again"
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
