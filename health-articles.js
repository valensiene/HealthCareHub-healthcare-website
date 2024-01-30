    window.onload = function () {
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

        var slideIndex = [1, 1];
        var slideId = ["diabetes-page", "heart-page"];
        showDivs(1, 0);
    
        function plusDivs(n, no) {
            showDivs(slideIndex[no] += n, no);
        }
    
        function currentDiv(n, no) {
            showDivs(slideIndex[no] = n, no);
        }
    
        function showDivs(n, no) {
            var i;
            var x = document.getElementsByClassName(slideId[no]);
            var dots = document.getElementsByClassName("page-number");
            if (n > x.length) slideIndex[no] = 1;
            if (n < 1) slideIndex[no] = x.length;
    
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
    
            var currentIndex = slideIndex[no] - 1;
            x[currentIndex].style.display = "block";
    
            for (i = 0; i < dots.length; i++) {
                dots[i].classList.remove("page-number-click");
            }
            
            x[currentIndex].style.display = "block";
            dots[currentIndex + (no * x.length)].classList.add("page-number-click");
        }
    
        function showArticles(category) {
            var allArticlePages = document.querySelectorAll('.articles-container > div');
            var articlesCategory = document.getElementsByClassName("articles-category");
            allArticlePages.forEach(page => (page.style.display = 'none'));
    
            // Show the specific article page for the selected category
            var selectedArticlePage = document.querySelector('.' + category + '-article-page');
            if (selectedArticlePage) {
                selectedArticlePage.style.display = 'block';
                showDivs(1, category === 'diabetes' ? 0 : 1);
            }
        }
    
        // Initially hide all article pages except diabetes
        var allArticlePages = document.querySelectorAll('.articles-container > div');
        allArticlePages.forEach(page => (page.style.display = 'none'));
    
        // Show the diabetes article page
        var diabetesArticlePage = document.querySelector('.diabetes-article-page');
        if (diabetesArticlePage) {
            diabetesArticlePage.style.display = 'block';
        }
    }
    
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
    
        var slideIndex = [1, 1];
        var slideId = ["diabetes-page", "heart-page"];
        showDivs(1, 0);
    
        function plusDivs(n, no) {
            showDivs(slideIndex[no] += n, no);
        }
    
        function currentDiv(n, no) {
            showDivs(slideIndex[no] = n, no);
        }
    
        function showDivs(n, no) {
            var i;
            var x = document.getElementsByClassName(slideId[no]);
            var dots = document.getElementsByClassName("page-number");
            if (n > x.length) slideIndex[no] = 1;
            if (n < 1) slideIndex[no] = x.length;
    
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
    
            var currentIndex = slideIndex[no] - 1;
            x[currentIndex].style.display = "block";
    
            for (i = 0; i < dots.length; i++) {
                dots[i].classList.remove("page-number-click");
            }
            
            x[currentIndex].style.display = "block";
            dots[currentIndex + (no * x.length)].classList.add("page-number-click");
        }
    
        function showArticles(category) {
            var allArticlePages = document.querySelectorAll('.articles-container > div');
            var articlesCategory = document.getElementsByClassName("articles-category");
            allArticlePages.forEach(page => (page.style.display = 'none'));
    
            // Show the specific article page for the selected category
            var selectedArticlePage = document.querySelector('.' + category + '-article-page');
            if (selectedArticlePage) {
                selectedArticlePage.style.display = 'block';
                showDivs(1, category === 'diabetes' ? 0 : 1);
            }
        }
    

    
    
