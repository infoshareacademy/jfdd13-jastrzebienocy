// UWAGI AS: zamknąc kod w funkcji samowykonujacej sie, dzieki temu nie generujemy zmiennych na window

// Modal window show :)
let modal = document.querySelector(".modal"); // UWAGI AS: czy to nie powinny byc const?
let trigger = document.querySelector(".trigger"); // UWAGI AS: j/w
let closeButton = document.querySelector(".close-button"); // UWAGI AS: j/w

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

// UWAGI AS: bardzo niezrozumialy kod i nie działa zgodnie z załozeniami zlecenia
const priceA = 99;
let priceA1 = priceA - priceA * 0.05;
let priceA2 = priceA - priceA * 0.07;

// Time of subscription prices
const priceT = 99;
let priceT1 = priceT - priceT * 0.05;
let priceT2 = priceT - priceT * 0.1;
let priceT3 = priceT - priceT * 0.15;

// let finalPrice = (priceA + priceT) / 2;
// Slider module -
// Output of calculator variable
let calculationOutput = document.querySelector('.calculation-output');
// inputs of calculator variable
const input = document.querySelectorAll('#months');
// Range Slider full module.
const rangeslider = document.getElementById('sliderRange');
let output = document.getElementById('quantity');
output.innerHTML = rangeslider.value;
rangeslider.oninput = function () {
  output.innerHTML = this.value;
  msg();
  priceCalculation();
  // clicker();
}

//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//Functions
// Account Quantity from slider
let getAccQuantity = () => {
  return document.getElementById('quantity').innerText;
}


// Get time of Subsccriptions function
let getTimeOfSubscription = () => {
  if (input[0].checked) {
    timeOfSubscription = 12;
    return timeOfSubscription;
  } else if (input[1].checked) {
    timeOfSubscription = 24
    return timeOfSubscription;
  } else if (input[2].checked) {
    timeOfSubscription = 36
    return timeOfSubscription
  } else if (input[3].checked) {
    timeOfSubscription = 37;
    return (timeOfSubscription);
  }
}
// Function wchich resets the slider to beggining position
// let resetSlider = () => {  // do not know if will use this time
//   rangeslider.value = 1;

// };
// Message in account Quntity output
const msg = () => {
  if (rangeslider.value == 10) {
    let message = (document.querySelector('#message').innerText = ' i więcej.');
    return message;
  } else {
    message = document.querySelector('#message').innerText = ' ';
  }
}

//-------------------------------------------------------------
// Main full function of calculator

function priceCalculation() {
  accQuantity = getAccQuantity();
  timeOfSubscription = getTimeOfSubscription();
  // UWAGI AS: bardzo skomplikowany proces liczenia.. kod do optymalizacji
  if (accQuantity >= 1 && accQuantity <= 4) {
    if (timeOfSubscription >= 1 && timeOfSubscription <= 12) {
      finalPrice = (priceA + priceT) / 2;
      // console.log(priceA);
      // console.log(priceT);
      // console.log(finalPrice.toFixed(2) + 'PLN per account')
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';

    } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
      finalPrice = (priceA + priceT1) / 2;
      // console.log(priceA);
      // console.log(priceT1);
      // console.log(finalPrice.toFixed(2) + ' PLN per account ')
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';

    } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
      finalPrice = (priceA + priceT2) / 2;
      // console.log(priceA);
      // console.log(priceT2);
      // console.log(finalPrice.toFixed(2) + ' PLN per account ')
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';
    } else if (timeOfSubscription > 36) {
      finalPrice = (priceA + priceT3) / 2;
      // console.log(priceA);
      // console.log(priceT3);
      // console.log(finalPrice.toFixed(2) + ' PLN per account ')
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';
    }
  } else if (accQuantity >= 5 && accQuantity <= 9) {
    if (timeOfSubscription >= 0 && timeOfSubscription <= 12) {
      finalPrice = (priceA1 + priceT) / 2;
      // console.log(priceA1)
      // console.log(priceT)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';
    } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
      finalPrice = (priceA1 + priceT1) / 2;
      // console.log(priceA1)
      // console.log(priceT1)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';
    } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
      finalPrice = (priceA1 + priceT2) / 2;
      // console.log(priceA1)
      // console.log(priceT2)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ')
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';
    } else if (timeOfSubscription > 36) {
      finalPrice = (priceA1 + priceT3) / 2;
      // console.log(priceA1)
      // console.log(priceT3)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';
    }
  } else {
    if (timeOfSubscription >= 0 && timeOfSubscription <= 12) {
      finalPrice = (priceA2 + priceT) / 2;
      // console.log(priceA2)
      // console.log(priceT)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';
    } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
      finalPrice = (priceA2 + priceT1) / 2;
      // console.log(priceA2)
      // console.log(priceT1)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';
    } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
      finalPrice = (priceA2 + priceT2) / 2;
      // console.log(priceA2)
      // console.log(priceT2)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';
    } else if (timeOfSubscription > 36) {
      finalPrice = (priceA2 + priceT3) / 2;
      // console.log(priceA2)
      // console.log(priceT3)
      // console.log(finalPrice.toFixed(2) + ' PLN per account ');
      calculationOutput.innerHTML = finalPrice.toFixed(2) + 'PLN za konto';
    }
  }
};







// UWAGI AS: ogolnie zastanówcie się nad kodem ponizej.. jest to pseudo kod pokazujący tylko algorytm liczenia. wiec do przerobienia na wlasciwy
/*
cenaPodstawowa = 99;
znizka = 0; // w domysle %, wartosc znizki podstawowej, do niej bedziemy dodawac kolejne znizki jesli spelnia sie warunki

if (wybraneKonta >= 5 && wybraneKonta < 10) {
  znizka += 5 // jesli ilosc kont pomiedzy 5-10 dodajemy do znizki 5%
} else if (wybraneKonta >= 10) {
  znizka += 7  // jesli ilosc kont powyzej 10 dodajemy do znizki 7%
}

if (iloscLat === 2) {
  znizka += 5;  // jesli ilosc lat = 2 dodajemy do znizki uwzgledniajacej ilosc kont dodatkowe 5%
} else if (iloscLat === 3) {
  znizka += 10; // jesli ilosc lat = 3 dodajemy do znizki uwzgledniajacej ilosc kont dodatkowe 5% (5% za 2 lata + 5% za 3 lata)
} else if (iloscLat > 3) {
  znizka += 15; // jesli ilosc lat >= 4 dodajemy do znizki uwzgledniajacej ilosc kont dodatkowe 5%, czyli lacznie 15
}

canaFinalna = cenaPodstawowa - cenaPodstawowa*(znizka/100); //bo zamieniamy na procenty
//albo
canaFinalna = cenaPodstawowa * (1 - znizka/100); //bo zamieniamy na procenty


// nic dodac, nic ujac. kod maksymalnie uproszczony, prosty i czytelny
*/