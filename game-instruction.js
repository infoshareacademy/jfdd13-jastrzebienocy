
let name = document.querySelector("#name");
let closeX = document.querySelector(".closeX")

let email = document.querySelector("#email");
const sendButton = document.querySelector(".send");

const overlay = document.querySelector(".game-instruction-overlay");
const InsBox = document.querySelector(".game-instruction-box");

let checkName = /[a-z\bąćśńółężź]{3,}$/i;

let checkEmail = /^[a-z\d]{3,20}[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;


function checkValidation() {
  if (!checkName.test(name.value))
    alert(
      "Musisz podać swoje imię nie używając spacji czy innych znaków łączeń, minimum trzy litery."
    );
  else if (!checkEmail.test(email.value))
    alert("Wpisz poprawny adres email nazwa min trzy litery");
  else {
    localStorage.setItem("name", name.value);
    Instruction();
  }
}

const Instruction = () => {
  overlay.style.display = "block";
  InsBox.style.display = "block";
};

const closeInstruction = () => {
  overlay.style.display = "none";
  InsBox.style.display = "none";
}

sendButton.addEventListener("click", checkValidation);
closeX.addEventListener("click", closeInstruction);
