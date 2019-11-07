// // Modal window show :)
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Variables:
// Account quantity prices
const basePrice = 99;
// Discount
let discount = 0;

let calculationOutput = document.querySelector(".calculation-output");
// inputs of calculator variable
const input = document.querySelectorAll("#months");
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
// Account Quantity from slider
let getAccQuantity = () => {
  return document.getElementById("quantity").innerText;
};

// Get time of Subsccriptions function
let getTimeOfSubscription = () => {
  if (input[0].checked) {
    return (timeOfSubscription = 1);
  } else if (input[1].checked) {
    return (timeOfSubscription = 2);
  } else if (input[2].checked) {
    return (timeOfSubscription = 3);
  } else if (input[3].checked) {
    return (timeOfSubscription = 4);
  } else {
    alert("Musisz zaznaczyć długość subskrypcji");
  }
};
// Message in account Quntity output
const msg = () => {
  if (rangeslider.value == 10) {
    let message = (document.querySelector("#message").innerText = " i więcej.");
    return message;
  } else {
    message = document.querySelector("#message").innerText = " ";
  }
};

//-------------------------------------------------------------
// Main full function of calculator

function priceCalculation() {
  accQuantity = getAccQuantity();
  timeOfSubscription = getTimeOfSubscription();
  if (accQuantity >= 1 && accQuantity <= 4) {
    if (timeOfSubscription == 1) {
      finalPrice = basePrice;
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    } else if (timeOfSubscription == 2) {
      discount = 5;
      finalPrice = basePrice * (1 - discount / 100);
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    } else if (timeOfSubscription == 3) {
      discount = 10;
      finalPrice = basePrice * (1 - discount / 100);
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    } else if (timeOfSubscription == 4) {
      discount = 15;
      finalPrice = basePrice * (1 - discount / 100);
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    }
  } else if (accQuantity >= 5 && accQuantity <= 9) {
    discount = 5;
    if (timeOfSubscription == 1) {
      finalPrice = basePrice * (1 - discount / 100);
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    } else if (timeOfSubscription == 2) {
      discount += 5;
      finalPrice = basePrice * (1 - discount / 100);
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    } else if (timeOfSubscription == 3) {
      discount += 10;
      finalPrice = basePrice * (1 - discount / 100);
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    } else if (timeOfSubscription == 4) {
      discount += 15;
      finalPrice = basePrice * (1 - discount / 100);
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    }
  } else if (accQuantity == 10) {
    discount = 7;
    if (timeOfSubscription == 1) {
      finalPrice = basePrice * (1 - discount / 100);
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    } else if (timeOfSubscription == 2) {
      discount += 5;
      finalPrice = basePrice * (1 - discount / 100);
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    } else if (timeOfSubscription == 3) {
      discount += 10;
      finalPrice = basePrice * (1 - discount / 100);
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    } else if (timeOfSubscription == 4) {
      discount += 15;
      finalPrice = basePrice * (1 - discount / 100);
      return (calculationOutput.innerHTML =
        finalPrice.toFixed(2) + "PLN za konto");
    }
  }
}
input.forEach(i => {
  i.addEventListener("click", () => {
    priceCalculation();
  });
});
