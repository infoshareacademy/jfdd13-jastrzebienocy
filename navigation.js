function toggleMenu() {
    const links = document.getElementById("myLinks");
    if (links.style.display === "flex") {
      links.style.display = "none";
    } else {
      links.style.display = "flex";
      links.classList.add('navColumn')
      links.classList.add("sticky2");
    }
  }
  

  
  const navCont = document.querySelector("#navbar")
  const navImage = document.querySelector(".nav-logo--image")
  const navbar = document.querySelector("#navbar");
  const sticky = navbar.offsetTop;
  function navigationBehavior() {
  if (window.matchMedia("(min-width: 800px)") && window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navImage.style.display = 'block';
  }
  else if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky");
  } 
  else {
  navbar.classList.remove("sticky");
  navImage.style.display = 'none';
  }
  }
  
  window.onscroll = function () {
    navigationBehavior();
    };