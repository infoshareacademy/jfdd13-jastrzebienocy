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

function priceCalculationAccount (accQuantity) {
    const price = 99;
    if(accQuantity >= 1 && accQuantity <= 4) {
        // const price = 99;
        console.log(price + ' PLN per account');
        // return price;
    } else if(accQuantity >= 5 && accQuantity <= 9) {
        const price1 = (price - (price * 0.05));
        console.log(price1 + ' PLN per account');
        // return price - (price* 0.05);
    } else {
        const price2 = (price - (price * 0.07));
        console.log(price2 + ' PLN per account');
        // return price - (price * 0.07);
    }
}
//Subscription calculation in months

function priceCalculationTime(timeOfSubscription) {
    if (timeOfSubscription > 0 && )
}


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
// });