// // Modal window show  - fixed variables :)
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

// Variables for price Calcultion:
// Account quantity  base price
const basePrice = 99;
// Discount declaration
let discount = 0;
// let finalPrice = basePrice * (1 - discount / 100);

// Calculation output variable
let calculationOutput = document.querySelector(".calculation-output");
// inputs of calculator variable
const input = document.querySelectorAll(".months");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", function() {
  priceCalculation();
  toggleModal();
});
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Range Slider full module.
const rangeslider = document.getElementById("sliderRange");
let output = document.getElementById("quantity");
output.innerHTML = rangeslider.value;
rangeslider.oninput = function() {
  output.innerHTML = this.value;
  msg();
  priceCalculation();
};

//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//Functions
// Addition message  display
const msg = () => {
  if (rangeslider.value == 10) {
    let message = (document.querySelector("#message").innerText = " i więcej.");
    return message;
  } else {
    message = document.querySelector("#message").innerText = " ";
  }
};
// Continuing calculation in case of  radiobutton change
input.forEach(i => {
  i.addEventListener("click", () => {
    priceCalculation();
  });
});

//-------------------------------------------------------------
// Main full function of calculator

function priceCalculation() {
  // Account Calculation
  if (rangeslider.value <= 4) discount = 0;
  else if (rangeslider.value >= 5 && rangeslider.value <= 9) discount = 5;
  else if (rangeslider.value == 10) discount = 7;
  // time of Subscription
  if (input[1].checked) discount += 5;
  else if (input[2].checked) discount += 10;
  else if (input[3].checked) discount += 15;
  let finalPrice = (basePrice * (1 - discount / 100)).toFixed(2);

  calculationOutput.innerHTML = `Cena za Subskrypcję: ${finalPrice} PLN
  zniżka: ${discount} %`;
}
