const banner = document.querySelector('.cookie-banner')
const guzik = document.querySelector('.cookie-button')

guzik.addEventListener('click',function(){
    localStorage.setItem('cookie', 'true');
    banner.style = "display: none"  
})