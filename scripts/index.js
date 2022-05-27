// Declares and store possible characters in a variable called chars
var chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Declares a variable called passwordLength and assign its value to 12
let passwordLength = 12;

// Stores the password1-el paragraph in a variable called password1EL
let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let password3El = document.getElementById("password3-el");
let password4El = document.getElementById("password4-el");

// Creates a function generatePasswords() that return a random password composed of passwordLength characters
function generatePasswords() {
  // Declares a variable called password and assign its value to an empty string
  let password = "";
  for (let j = 0; j < passwordLength; j++) {
    let randomIndex = Math.floor(Math.random() * chars.length);

    // Adds the new random chars to the password string
    password += chars[randomIndex];
  }
  return password;
}

// Creates a function getGeneratePasswords() that displays generated passwords in HTML document
function getGeneratePasswords() {
  // Displays the message in the messageEl using messageEl.textContent
  password1El.textContent = generatePasswords();
  password2El.textContent = generatePasswords();
  password3El.textContent = generatePasswords();
  password4El.textContent = generatePasswords();
  // Call changeColorPasswords() function
  changeColorPasswords();
}

// Creates a function changeColorPasswords() that changes color to passwords
function changeColorPasswords() {
  // Gets and stores all elements with generatedPassword class in allPassword variable
  let allPasswords = document.getElementsByClassName("generatedPassword");
  // Changes color to var(--clr-bright-green) for every passwords in allPasswords
  for (let i = 0; i < allPasswords.length; i++) {
    allPasswords[i].style.color = "var(--clr-bright-green)";
  }
}
