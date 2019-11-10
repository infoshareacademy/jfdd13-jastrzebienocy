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
    sectionsHighlight();
    };
    
      function sectionsHighlight() {
          const section = document.querySelectorAll(".section");
          const sections = {};
          let i = 0;
        
          Array.prototype.forEach.call(section, function(e) {
            sections[e.id] = e.offsetTop;
          })
        const scrollPosition =  document.documentElement.scrollTop ;
    
        for (i in sections) {
          if (sections[i] <= scrollPosition + 500) {
            // 
            document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active2');
          }
          else {
            document.querySelector('a[href*=' + i + ']').classList.remove("active2");
          }
          // else if (sections[i] > scrollPosition + 750) {
          //   document.querySelector('.active2').setAttribute('class', ' ');
          // }
        }
    };







