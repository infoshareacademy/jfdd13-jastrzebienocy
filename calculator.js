// Abonament
// Ilość kont/mc
// 1 - 4kont - 99zł/1konto
// 5 -9 kont - 99zł - 5%/konto
// 10kont-> - 99zł - 7%/konto
// Czas subskrypcji
//1rok  - 0%
//2lata - +5%
//3lata - +5%
//4> lata +5% - max 15% zniżki
// const accountQuantity = quantity;
// const timeOfSubscription = time;
// const price = 99;
// const priceA = 99;
// const priceT = 99;

// Próba kalkulowania
// function priceCalculationAccount (accQuantity) {
//     const priceA = 99;
//     if(accQuantity >= 1 && accQuantity <= 4) {
//         // const price = 99;
//         console.log(priceA + ' PLN per account');
//         // return price;
//     } else if(accQuantity >= 5 && accQuantity <= 9) {
//         const priceA1 = (priceA - (priceA * 0.05));
//         console.log(priceA1 + ' PLN per account');
//         // return price - (price* 0.05);
//     } else {
//         const priceA2 = (priceA - (priceA * 0.07));
//         console.log(priceA2 + ' PLN per account');
//         // return price - (price * 0.07);
//     }
// }
// //Subscription calculation in months

// function priceCalculationTime(timeOfSubscription) {
//     const priceT = 99;
//     if (timeOfSubscription > 0 && timeOfSubscription <= 12) {
//         console.log(priceT +   ' PLN per account');
//         // return price1  + ' PLN per account';
//     } else if(timeOfSubscription > 12 && timeOfSubscription <= 24) {
//         const priceT1 = priceT - (priceT * 0.05);
//         console.log(priceT1 + 'PLN per account');
//         // return pricet1  + ' PLN per account';
//     } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
//         const priceT2 = priceT - (priceT * 0.1);
//         console.log(priceT2 + 'PLN per account');
//         // return pricet1  + ' PLN per account';
//     } else  {
//         const priceT3 = priceT - (priceT * 0.15);
//         console.log(priceT3 + 'PLN per account');
//         // return pricet1  + ' PLN per account';
//     }
// }
const output = document.getElementById("quantity"); 
// Trying code of slider calc connection
const rangeslider = document.getElementById("sliderRange"); 
// const output = document.getElementById("quantity"); 
output.innerHTML = rangeslider.value; 
  
rangeslider.oninput = function() { 
  output.innerHTML = this.value; 

function priceCalculation (output, timeOfSubscription) {
    const priceA = 99;
    let priceA1 = priceA - (priceA * 0.05);
    let priceA2 = priceA - (priceA * 0.07);    

    const priceT = 99;
    let priceT1 = priceT - (priceT * 0.05);
    let priceT2 = priceT - (priceT * 0.1);
    let priceT3 = priceT - (priceT * 0.15)

    if(accQuantity >= 1 && accQuantity <= 4) {
        if(timeOfSubscription >= 0 && timeOfSubscription <= 12){
            let finalPrice = (priceA + priceT)/2;
            console.log(finalPrice.toFixed(2) + 'PLN per account');
        } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
            // let priceT1 = priceT - (priceT * 0.05)
            // console.log(priceT1);       
            finalPrice = (priceA + priceT1)/2; 
            console.log(finalPrice.toFixed(2) + ' PLN per account ');        
        } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
            // let priceT2 = priceT - (priceT * 0.1)
            console.log(priceT2);       
            finalPrice = (priceA + priceT2)/2; 
            console.log(finalPrice.toFixed(2) + ' PLN per account '); 
        } else {
            // let priceT3 = priceT - (priceT * 0.15)
            // console.log(priceT3);       
            finalPrice = (priceA + priceT3)/2; 
            console.log(finalPrice.toFixed(2) + ' PLN per account '); 
        }
    } else if (accQuantity >= 5 && accQuantity <= 9) {
        // let priceA1 = (priceA - (priceA * 0.05));
        if(timeOfSubscription >= 0 && timeOfSubscription <= 12) {
            // let priceA1 = (priceA - (priceA * 0.05));
            // console.log(priceA1);
            finalPrice = (priceA1 + priceT)/2;
            console.log(priceA1);
            console.log(priceT);
            console.log(finalPrice.toFixed(2) + ' PLN per account ');
        } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
            finalPrice = (priceA1 + priceT1)/2; 
            console.log(priceA1);
            console.log(priceT1);
            console.log(finalPrice.toFixed(2) + ' PLN per account ');        
        } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
            finalPrice = (priceA1 + priceT2)/2;
            console.log(priceA1);
            console.log(priceT2);
            console.log(finalPrice.toFixed(2) + ' PLN per account ');        
        } else  {
            finalPrice = (priceA1 + priceT3)/2;
            console.log(priceA1);
            console.log(priceT3);
            console.log(finalPrice.toFixed(2) + ' PLN per account ');        
        }
    } else {
        if(timeOfSubscription >= 0 && timeOfSubscription <= 12) {
            // let priceA1 = (priceA - (priceA * 0.05));
            // console.log(priceA1);
            finalPrice = (priceA2 + priceT)/2;
            console.log(priceA2);
            console.log(priceT);
            console.log(finalPrice.toFixed(2) + ' PLN per account ');
        } else if (timeOfSubscription > 12 && timeOfSubscription <= 24) {
            finalPrice = (priceA2 + priceT1)/2; 
            console.log(priceA2);
            console.log(priceT1);
            console.log(finalPrice.toFixed(2) + ' PLN per account ');        
        } else if (timeOfSubscription > 24 && timeOfSubscription <= 36) {
            finalPrice = (priceA2 + priceT2)/2;
            console.log(priceA2);
            console.log(priceT2);
            console.log(finalPrice.toFixed(2) + ' PLN per account ');        
        } else  {
            finalPrice = (priceA2 + priceT3)/2;
            console.log(priceA2);
            console.log(priceT3);
            console.log(finalPrice.toFixed(2) + ' PLN per account ');        
        }
    }
};

// Calculator:
// class Subsctiption {
//     constructor(accountQuantity, timeOfSubscription) {
//         this.accountQuantity = accountQuantity;
//         this.timeOfSubscription = timeOfSubscription;
//     }

// }




// var range = document.querySelector('.input-range'),
//     value = document.querySelector('.range-value');
    
// value.html(range.attr('value'));
 
// range.on('input', function(){
//     value.html(this.value);
// })



// Trying code of slider calc connection
const rangeslider = document.getElementById("sliderRange"); 
// const output = document.getElementById("quantity"); 
output.innerHTML = rangeslider.value; 
  
rangeslider.oninput = function() { 
  output.innerHTML = this.value; 
} 
