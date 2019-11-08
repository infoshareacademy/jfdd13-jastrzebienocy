//Variables of form validationof form
let name = document.querySelector("#name");
let email = document.querySelector("#email");
const sendButton = document.querySelector(".send");
// Varibles of game instructions
const overlay = document.querySelector(".game-instruction-overlay");
const InsBox = document.querySelector(".game-instruction-box");

// Regular expressions for validating email before the game instruction shows itself
// Name Validator
let checkName = /^[a-z]{3,20}$/i;
// Email validator
let checkEmail = /^[a-z\d]{3,20}[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

// Function which checks the form validation b4 let you play the game (b4 read instruction)
function checkValidation() {
  if (!checkName.test(name.value)) alert("You have to enter valid name");
  else if (!checkEmail.test(email.value))
    alert("You have to enter valid email");
  else Instruction();
}
// Game instruction  display function
const Instruction = () => {
  overlay.style.display = "block";
  InsBox.style.display = "block";
};
// caller on button "Wyślij"
sendButton.addEventListener("click", checkValidation);
