const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

const basePrice = 99;
let discount = 0;

let calculationOutput = document.querySelector(".calculation-output");
const input = document.querySelectorAll(".months");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", () => {
  toggleModal();
  priceCalculation();
});
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

const rangeslider = document.getElementById("sliderRange");
let output = document.getElementById("quantity");
output.innerHTML = rangeslider.value;
rangeslider.oninput = function() {
  output.innerHTML = this.value;
  msg();
  priceCalculation();
};

const msg = () => {
  if (rangeslider.value == 10) {
    let message = (document.querySelector("#message").innerText = " i więcej.");
    return message;
  } else {
    message = document.querySelector("#message").innerText = " ";
  }
};

input.forEach(i => {
  i.addEventListener("click", () => {
    priceCalculation();
  });
});

function priceCalculation() {

  if (rangeslider.value <= 4) discount = 0;
  else if (rangeslider.value >= 5 && rangeslider.value <= 9) discount = 5;
  else if (rangeslider.value == 10) discount = 7;
 
  if (input[1].checked) discount += 5;
  else if (input[2].checked) discount += 10;
  else if (input[3].checked) discount += 15;
  let finalPrice = basePrice * (1 - discount / 100);

  calculationOutput.innerHTML = `Cena za Subskrypcję: ${finalPrice.toFixed(
    2
  )} PLN <br>
  zniżka: ${discount} %`;
}
