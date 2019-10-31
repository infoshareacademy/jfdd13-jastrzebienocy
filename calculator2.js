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
  msg()
}

//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//Functions
// Account Quantity of calcualator
let getAccQuantity = () => {
  return document.getElementById('quantity').innerText
}


// Get time of Subsccriptions function
let getTimeOfSubscription = () => {
  // const input = document.querySelectorAll('input');
  if (input[0].checked) {
    timeOfSubscription = 12
    return timeOfSubscription;
    // console.log(timeOfSubscription);
  } else if (input[1].checked) {
    timeOfSubscription = 24
    return timeOfSubscription;
    // console.log(timeOfSubscription);
  } else if (input[2].checked) {
    timeOfSubscription = 36
    return timeOfSubscription
    // console.log(timeOfSubscription);
  } else if (input[3].checked) {
    timeOfSubscription = 37
    return timeOfSubscription;
    // console.log(timeOfSubscription);
  }
}
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
// Main full function of clculator

function priceCalculation () {
    accQuantity = getAccQuantity();
    timeOfSubscription = getTimeOfSubscription();
// } 
    if (accQuantity >= 1 && accQuantity <= 4) {
      
      if (timeOfSubscription >= 1 && timeOfSubscription <= 12) {
        finalPrice = (priceA + priceT)/2;
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
        console.log(finalPrice.toFixed(2) + 'PLN per account')
      } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
        // let priceT1 = priceT - (priceT * 0.05)
        // console.log(priceT1);
        finalPrice = (priceA + priceT1) / 2
        console.log(finalPrice.toFixed(2) + ' PLN per account ')
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
        // let priceT2 = priceT - (priceT * 0.1)
        console.log(priceT2)
        finalPrice = (priceA + priceT2) / 2
        console.log(finalPrice.toFixed(2) + ' PLN per account ')
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      } else if (timeOfSubscription > 37){
        // let priceT3 = priceT - (priceT * 0.15)
        // console.log(priceT3);
        finalPrice = (priceA + priceT3) / 2
        console.log(finalPrice.toFixed(2) + ' PLN per account ')
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      }
    } else if (accQuantity >= 5 && accQuantity <= 9) {
      // let priceA1 = (priceA - (priceA * 0.05));
      if (timeOfSubscription >= 0 && timeOfSubscription <= 12) {
        // let priceA1 = (priceA - (priceA * 0.05));
        // console.log(priceA1);
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
      } else {
        finalPrice = (priceA1 + priceT3) / 2
        console.log(priceA1)
        console.log(priceT3)
        console.log(finalPrice.toFixed(2) + ' PLN per account ');
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      }
    } else {
      if (timeOfSubscription >= 0 && timeOfSubscription <= 12) {
        // let priceA1 = (priceA - (priceA * 0.05));
        // console.log(priceA1);
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
      } else {
        finalPrice = (priceA2 + priceT3) / 2
        console.log(priceA2)
        console.log(priceT3)
        console.log(finalPrice.toFixed(2) + ' PLN per account ');
        calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN per account';
      }
    } 
};