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

    // function event){
    //   var sections = document.querySelectorAll(".section");
    //   var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      
    //   for( var i = 0; i < sections.length; i++ ){
    //     var currLink = sections[i]; 
    //     var val = document.querySelector("#myLinks > a");
    //     // var refElement = document.querySelector(val);
    //       if( val.offsetTop <= scrollPos && ( val.offsetTop + val.offsetHeight > scrollPos)){
    //         document.document.querySelector("#myLinks > a").classList.remove('active');
    //         currLink.classList.add('active');
    //       }else{
    //          currLink.classList.remove('active');
    //        }
    //   }   
    // };
    
    // window.document.addEventListener('scroll', onScroll );
    
    // jak zrobic podswietlanie //
    // (function() {
    
    //   var section = document.querySelectorAll(".section");
    //   var sections = {};
    //   var i = 0;
    
    //   Array.prototype.forEach.call(section, function(e) {
    //     sections[e.id] = e.offsetTop;
    //   });
    
    //   window.onscroll = function() {
    //     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    //     for (i in sections) {
    //       if (sections[i] <= scrollPosition) {
    //         document.querySelector('.active').setAttribute('class', ' ');
    //         document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
    //       }
    //     }
    //   };
    // })();