//Variables of form validationof form
let name = document.querySelector("#name");
let actualName = name.value;
localStorage.setItem('name', actualName.innerText);
let email = document.querySelector("#email");
const sendButton = document.querySelector(".send");
// Varibles of game instructions
const overlay = document.querySelector(".game-instruction-overlay");
const InsBox = document.querySelector(".game-instruction-box");

// Regular expressions for validating email before the game instruction shows itself
// Name Validator
let checkName = /[a-z\bąćśńółężź]{3,}$/i;
// Email validator
let checkEmail = /^[a-z\d]{3,}[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

// Function which checks the form validation b4 let you play the game (b4 read instruction)
function checkValidation() {
  if (!checkName.test(name.value))
    alert(
      "Musisz podać swoje imię nie używając spacji czy innych znaków łączeń - minimalna ilość znaków to 3."
    );
  else if (!checkEmail.test(email.value))
    alert("Wpisz poprawny adres email minimalna długość znaków to 3.");
  else {
    localStorage.setItem("player:", name.value);
    Instruction();
  }
}
// Game instruction  display function
const Instruction = () => {
  overlay.style.display = "block";
  InsBox.style.display = "block";
};
// caller on button "Wyślij"
sendButton.addEventListener("click", checkValidation);
