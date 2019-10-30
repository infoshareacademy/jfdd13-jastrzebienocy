$(document).ready(function() { 

    $('.notification').show();    
                $('#close').click(function(){  
  
                  $('.notification').hide();    
  
                });
    function checkCookie() {
        var cookieset = getCookie("_checkCookie");
  
        if (cookieset!="") {
  
            $('.notification').hide();    
  
        }else{
  
            $('.notification').hide();    
  
            if (cookieset != "" && cookieset != null) {
  
  
  
              setCookie("_checkCookie", cookieset, 365);
            }
        }
    } 
    checkCookie();
    
  });