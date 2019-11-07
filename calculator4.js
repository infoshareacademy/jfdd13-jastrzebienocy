// Modal window show :)
let modal = document.querySelector(".modal");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");

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
let priceA = 99;
let priceA1 = priceA - priceA * 0.05;
let priceA2 = priceA - priceA * 0.07;

// Time of subscription prices
let priceT = 99;
let priceT1 = priceT - priceT * 0.05;
let priceT2 = priceT - priceT * 0.1;
let priceT3 = priceT - priceT * 0.15;
// let finalPrice;

// let finalPrice = (priceA + priceT) / 2;
// Slider module -
// Output of calculator variable
let calculationOutput = document.querySelector(".calculation-output");
// inputs of calculator variable
const input = document.querySelectorAll(".months");
// Range Slider full module.
const rangeslider = document.getElementById("sliderRange");
let output = document.getElementById("quantity");
output.innerHTML = rangeslider.value;
rangeslider.oninput = function() {
  output.innerHTML = this.value;
  msg();
  timeOfSubscription;
  priceCalculation();
  // clicker();
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
    return 12;
  } else if (input[1].checked) {
    return 24;
  } else if (input[2].checked) {
    return 36;
  } else if (input[3].checked) {
    return 37;
    // return timeOfSubscription;
  }
};
// Function wchich resets the slider to beggining position
// let resetSlider = () => {  // do not know if will use this time
//   rangeslider.value = 1;

// };
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
    if (timeOfSubscription >= 1 && timeOfSubscription <= 12) {
      finalPrice = priceA;
      // console.log(priceA);
      // console.log(priceT);
      // console.log(finalPrice.toFixed(2) + 'PLN per account')
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
      finalPrice = priceA - priceA * 0.05;
      // console.log(priceA);
      // console.log(priceT1);
      // console.log(finalPrice.toFixed(2) + ' PLN per account ')
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
      finalPrice = priceA - priceA * 0.1;
      // console.log(priceA);
      // console.log(priceT2);
      // console.log(finalPrice.toFixed(2) + ' PLN per account ')
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    } else if (timeOfSubscription > 36) {
      finalPrice = priceA - priceA * 0.15;
      // console.log(priceA);
      // console.log(priceT3);
      // console.log(finalPrice.toFixed(2) + ' PLN per account ')
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    }
  } else if (accQuantity >= 5 && accQuantity <= 9) {
    if (timeOfSubscription >= 0 && timeOfSubscription <= 12) {
      finalPrice = (priceA1 + priceT) / 2;
      // console.log(priceA1)
      // console.log(priceT)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
      finalPrice = (priceA1 + priceT1) / 2;
      // console.log(priceA1)
      // console.log(priceT1)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
      finalPrice = (priceA1 + priceT2) / 2;
      // console.log(priceA1)
      // console.log(priceT2)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ')
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    } else if (timeOfSubscription > 36) {
      finalPrice = (priceA1 + priceT3) / 2;
      // console.log(priceA1)
      // console.log(priceT3)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    }
  } else {
    if (timeOfSubscription >= 0 && timeOfSubscription <= 12) {
      finalPrice = (priceA2 + priceT) / 2;
      // console.log(priceA2)
      // console.log(priceT)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
      finalPrice = (priceA2 + priceT1) / 2;
      // console.log(priceA2)
      // console.log(priceT1)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
      finalPrice = (priceA2 + priceT2) / 2;
      // console.log(priceA2)
      // console.log(priceT2)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    } else if (timeOfSubscription > 36) {
      finalPrice = (priceA2 + priceT3) / 2;
      // console.log(priceA2)
      // console.log(priceT3)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + "PLN za konto";
    }
  }
}
input.forEach(i => {
  i.addEventListener("change", () => {
    priceCalculation();
  });
});

rangeslider.value.forEach(value => {
  value.addEventListener("change", () => {
    priceCalculation();
  });
});
