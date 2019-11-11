
  const navCont = document.querySelector("#navbar")
  const navImage = document.querySelector(".nav-logo--image")
  const navbar = document.querySelector("#navbar");
  const sticky = navbar.offsetTop;

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
  
//highlighting menu by % of scroll
function getDocHeight() {
  let doc = document;
  return Math.max(
      doc.body.scrollHeight, doc.documentElement.scrollHeight,
      doc.body.offsetHeight, doc.documentElement.offsetHeight,
      doc.body.clientHeight, doc.documentElement.clientHeight
  )
}

let docheight = getDocHeight()

function amountscrolled(){
  let winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
  let docheight = getDocHeight()
  let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  let trackLength = docheight - winheight
  let pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  
  if (pctScrolled <17) {
    document.querySelector('#myLinks > a:nth-child(1)').setAttribute('class', ' ');
  }
  else if (pctScrolled > 18 && pctScrolled < 44) {
    document.querySelector('#myLinks > a:nth-child(1)').setAttribute('class', 'active2');
    document.querySelector('#myLinks > a:nth-child(2)').setAttribute('class', ' ');
  }
  else if (pctScrolled >= 45 && pctScrolled < 71) {
    document.querySelector('.active2').setAttribute('class', ' ');
    document.querySelector('#myLinks > a:nth-child(2)').setAttribute('class', 'active2');
  }
  else if (pctScrolled >= 72 && pctScrolled < 93) {
    document.querySelector('.active2').setAttribute('class', ' ');
    document.querySelector('#myLinks > a:nth-child(3)').setAttribute('class', 'active2');
  }
  else if (pctScrolled >= 93) {
    document.querySelector('.active2').setAttribute('class', ' ');
    document.querySelector('#myLinks > a:nth-child(4)').setAttribute('class', 'active2');
  }
}

window.addEventListener("scroll", function(){
  amountscrolled();
})


let list = document.querySelector('#myLinks');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'a') {
    ev.target.classList.toggle('active2');
  }
}, false);




