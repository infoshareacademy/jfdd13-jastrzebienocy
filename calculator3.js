// Variables:
const priceA = 99
let priceA1 = priceA - priceA * 0.05
let priceA2 = priceA - priceA * 0.07

const priceT = 99
let priceT1 = priceT - priceT * 0.05
let priceT2 = priceT - priceT * 0.1
let priceT3 = priceT - priceT * 0.15

let finalPrice = (priceA + priceT) / 2;
// Slider module -
// Button Oblicz Declaration
const calculationBtn = document.querySelector('.calculate-btn');
// Output of czlculator variable
let calculationOutput = document.querySelector('.calculation-output');
// inputs of calculator variable
const input = document.querySelectorAll('#months')
// Range Slider full module.
const rangeslider = document.getElementById('sliderRange')
let output = document.getElementById('quantity')
output.innerHTML = rangeslider.value
rangeslider.oninput = function () {
  output.innerHTML = this.value
  msg();
  priceCalculation ();
  // clicker();
}

//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//Functions
// Account Quantity of calcualator
let getAccQuantity = () => {
  return document.getElementById('quantity').innerText;
}


// Get time of Subsccriptions function
let getTimeOfSubscription = () => {
  // const input = document.querySelectorAll('input');
  if (input[0].checked) {
    // clicker();
    timeOfSubscription = 12;
    // rangeslider.set('value', 1);
    return timeOfSubscription;
    
    // console.log(timeOfSubscription);
  } else if (input[1].checked) {
    // clicker();
    // rangeslider.value = 1;
    timeOfSubscription = 24
    return timeOfSubscription;
    // console.log(timeOfSubscription);
  } else if (input[2].checked) {
    // clicker();
    // rangeslider.value = 1;
    timeOfSubscription = 36
    return timeOfSubscription
    // console.log(timeOfSubscription);
  } else if (input[3].checked) {
    // clicker();
    // rangeslider.value = 1;
    timeOfSubscription = 37;
    rangeslider.value = '1';
    return (timeOfSubscription);
    // console.log(timeOfSubscription);
  }
}
// Function wchich resets the dlider to beggining position
let resetSlider = () => {
  rangeslider.value = 1;
  // rangeslider.set('value', '1');
};
// Message in account Quntity output
const msg = () => {
  // let message = document.querySelector('#message').innerText = ' i więcej';
  if (rangeslider.value == 10) {
    let message = (document.querySelector('#message').innerText = ' i więcej.')
    return message
  } else if (rangeslider.value < 10) {
    message = document.querySelector('#message').innerText = ' '
  }
}

//-------------------------------------------------------------
// Main full function of calculator

function priceCalculation () {
    accQuantity = getAccQuantity();
    timeOfSubscription = getTimeOfSubscription();
// } 
    if (accQuantity >= 1 && accQuantity <= 4) {
      // rangeslider.set('value', 1);
      if (timeOfSubscription >= 1 && timeOfSubscription <= 12) {
        finalPrice = (priceA + priceT)/2;
        console.log(priceA);
        console.log(priceT);
        console.log(finalPrice.toFixed(2) + 'PLN per account')
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';

      } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
        finalPrice = (priceA + priceT1) / 2
        console.log(priceA);
        console.log(priceT1);
        console.log(finalPrice.toFixed(2) + ' PLN per account ')
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';

      } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
        finalPrice = (priceA + priceT2) / 2
        console.log(priceA);
        console.log(priceT2);
        console.log(finalPrice.toFixed(2) + ' PLN per account ')
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      } else if (timeOfSubscription > 36){
        finalPrice = (priceA + priceT3) / 2
        console.log(priceA);
        console.log(priceT3);
        console.log(finalPrice.toFixed(2) + ' PLN per account ')
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      }
    } else if (accQuantity >= 5 && accQuantity <= 9) {
      if (timeOfSubscription >= 0 && timeOfSubscription <= 12) {
        finalPrice = (priceA1 + priceT) / 2
        console.log(priceA1)
        console.log(priceT)
        console.log(finalPrice.toFixed(2) + ' PLN per account ');
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
        finalPrice = (priceA1 + priceT1) / 2
        console.log(priceA1)
        console.log(priceT1)
        console.log(finalPrice.toFixed(2) + ' PLN per account ');
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
        finalPrice = (priceA1 + priceT2) / 2
        console.log(priceA1)
        console.log(priceT2)
        console.log(finalPrice.toFixed(2) + ' PLN per account ')
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      } else if (timeOfSubscription > 36) {
        finalPrice = (priceA1 + priceT3) / 2
        console.log(priceA1)
        console.log(priceT3)
        console.log(finalPrice.toFixed(2) + ' PLN per account ');
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      }
    } else {
      if (timeOfSubscription >= 0 && timeOfSubscription <= 12) {
        finalPrice = (priceA2 + priceT) / 2
        console.log(priceA2)
        console.log(priceT)
        console.log(finalPrice.toFixed(2) + ' PLN per account ');
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
        finalPrice = (priceA2 + priceT1) / 2
        console.log(priceA2)
        console.log(priceT1)
        console.log(finalPrice.toFixed(2) + ' PLN per account ');
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
        finalPrice = (priceA2 + priceT2) / 2
        console.log(priceA2)
        console.log(priceT2)
        console.log(finalPrice.toFixed(2) + ' PLN per account ');
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      } else if (timeOfSubscription > 36) {
        finalPrice = (priceA2 + priceT3) / 2
        console.log(priceA2)
        console.log(priceT3)
        console.log(finalPrice.toFixed(2) + ' PLN per account ');
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      }
    } 
};