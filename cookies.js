// UWAGI AS: kod zamknac w funkcji zamowykonujacej sie

// DOdatko, nie spełnia swojej funkcji. Bo po odswiezeniu strony dalej widac komunikat o cookie.
// po odswiezzeniu trzeba odczytac stan cookie i i pokazywac komunikat, albo nie
// dodatkowo, cookie powinniescie zapisac w cookie, a nie localstorage

const banner = document.querySelector('.cookie-banner')
const guzik = document.querySelector('.cookie-button')

guzik.addEventListener('click',function(){
    localStorage.setItem('cookie', 'true');
    banner.style = "display: none"  
})