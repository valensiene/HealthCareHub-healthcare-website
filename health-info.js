window.onload = function() {
    // Get the button
    let mybutton = document.getElementById("nav-up");
  
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
      } else {
        mybutton.style.display = 'none';
      }
    };
  };
  
    
    // When the user clicks on the button, scroll to the top of the document smoothly
    function topFunction() {
        // Modern browsers
        if (document.documentElement.scrollTop) {
          document.documentElement.scrollTo({
            top: 0
          });
        } else {
          // For older browsers
          document.body.scrollTop = 0;
        }
      }