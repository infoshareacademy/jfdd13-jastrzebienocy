const banner = document.querySelector(".cookie-banner");
const cookieButton = document.querySelector(".cookie-button");

let setCookie = () => {
  document.cookie =
    "name=user;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Lax";
};

function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf("name") === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function cookieEvent() {
  if (getCookie(name) === "") {
    banner.style = "display: block";
  }
}

cookieButton.addEventListener("click", function() {
  banner.style = "display: none";
  setCookie();
});

cookieEvent();
