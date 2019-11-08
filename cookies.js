const banner = document.querySelector('.cookie-banner')
const guzik = document.querySelector('.cookie-button')

const setCookie = () => {
    document.cookie ="name=user;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Lax";
}

guzik.addEventListener('click',function(){
    //localStorage.setItem('cookie', 'false');
    banner.style = "display: none";
    setCookie ();
})





// const Wyswietl = () => {
// if ( getCookie("name") !== true) {
//     banner.style = "display: block";
// }
// };

// function getCookie(cname) {
//     const name = cname + "=";
//     const decodedCookie = decodeURIComponent(document.cookie);
//     const ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) === ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) === 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// getCookie();