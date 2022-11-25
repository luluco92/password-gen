// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
var finishedPassword = "";
// abc, ABC, num, spec
//var included = [false, false, false, false];
var c = 0;
var activeBitmap = "";

// loop 1: picking the number of characters
while ( c < 8 || c > 128 ) {
   c = prompt("How many characters in this password? (8-128)", "0");
   if (c === null) {
   return "";
   }
   if ( isNaN(+c) ) {
      c = 0;
      }
   else {
      c = Math.floor(+c);
      }
   }

// loop 2: picking the types of chars to include
while ( activeBitmap === "" ) {
   if (confirm("Include lowercase letters?")) {
      if (!activeBitmap.includes("wertyuiopas")) {
          activeBitmap += "qwertyuiopasdfghjklzxcvbnm"; 
      }
   }
else {
    activeBitmap = activeBitmap.replace("qwertyuiopasdfghjklzxcvbnm", ""); }

   if (confirm("Include uppercase letters?")) { 
      if (!activeBitmap.includes("IOPASDFGHJKL")) {
    activeBitmap += "QWERTYUIOPASDFGHJKLZXCVBNM"; 
      }
   }
else {
    activeBitmap = activeBitmap.replace("QWERTYUIOPASDFGHJKLZXCVBNM", ""); }

   if (confirm("Include numbers?")) {
      if (!activeBitmap.includes("3456789")) {
    activeBitmap += "1234567890"; 
      }
   }
else {
    activeBitmap = activeBitmap.replace("1234567890", ""); }

   if (confirm("Include special symbols?")) {
      if (!activeBitmap.includes("[@?>=<;:/.-,")) {
    activeBitmap += " ~}|{`_^]\\[@?>=<;:/.-,+*)('&%$!\"#"; 
      }
   }
else {
    activeBitmap = activeBitmap.replace(" ~}|{`_^]\\[@?>=<;:/.-,+*)('&%$!\"#", ""); }

if (activeBitmap === "" ) {
   alert("At least one type of character must be included!");
   }
}

// loop 3: adding random chars to the password
for ( i = 0; i < c; i++ ) {
   finishedPassword += activeBitmap.charAt(Math.floor(Math.random()*activeBitmap.length));
   }

// console.log(activeBitmap);
return finishedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

