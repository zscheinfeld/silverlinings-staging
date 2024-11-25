$( document ).ready(function() {

    $(".chapter-content-open").on('scroll', function() {
        $('.call-out-first').each(function() {
          if (isElementInViewport($(this))) {
            $(this).addClass("view")
            setTimeout(() => {
                $(this).siblings(".two").addClass("view")
              }, 200);
            setTimeout(() => {
                $(this).siblings(".three").addClass("view")
              }, 300);
          }

          if (isOutOfViewport($(this))) {
            $(this).removeClass("view")
            setTimeout(() => {
                $(this).siblings(".two").removeClass("view")
              }, 200);
            setTimeout(() => {
                $(this).siblings(".three").removeClass("view")
              }, 300);
          }
       
        });
      });
  
      function isElementInViewport(el) {
        var rect = el[0].getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function isOutOfViewport(element) {
        var $element = $(element);
        var bounding = $element[0].getBoundingClientRect();
    
        return (
          bounding.top > $(window).height() ||
          bounding.bottom < 0 ||
          bounding.left > $(window).width() ||
          bounding.right < 0
        );
      }

      // next function

      $(".side-bar").click(function(){
        console.log("nextclicked")
        if ($(this).hasClass("chapter-bar-next")){
                $(this).parent().siblings(".open").prev().children(".side-bar").removeClass("prev")
                $(this).parent().siblings(".open").prev().children(".side-bar").addClass("chapter-bar-closed")
                $(this).parent().siblings(".open").prev().addClass("closed")
                $(this).parent().siblings(".open").children(".side-bar").toggleClass("open-bar")
                $(this).parent().siblings(".open").children(".side-bar").toggleClass("prev")
                $(this).parent().siblings(".open").children(".chapter-content-open").toggleClass("chapter-content-closed")
                $(this).parent().siblings(".open").children(".chapter-content-open").toggleClass("chapter-content-open")
                $(this).siblings(".chapter-content").toggleClass("chapter-content-open")
                $(this).siblings(".chapter-content").toggleClass("chapter-content-closed")
                $(this).siblings(".subchapter-nav").toggleClass("subchapter-nav-open")
                $(this).parent().siblings(".open").children(".subchapter-nav").toggleClass("subchapter-nav-open")
                $(this).parent().siblings(".open").toggleClass("open")
                $(this).parent().addClass("open")
                $(this).parent().next().removeClass("closed")
                $(this).parent().next().children(".side-bar").removeClass("chapter-bar-closed")
                // $(this).parent().next().children(".side-bar").toggleClass("next")
                $(this).parent().next().children(".side-bar").toggleClass("chapter-bar-next")
                $(this).removeClass("chapter-bar-next")
                $(this).addClass("open-bar")
        }

        if ($(this).hasClass("prev")){
            console.log("prev")
            $(this).parent().siblings(".open").prev().children(".side-bar").removeClass("closed")
            $(this).parent().siblings(".open").children(".side-bar").removeClass("open-bar")
            $(this).parent().siblings(".open").children(".side-bar").addClass("chapter-bar-next")
            $(this).parent().prev().children(".side-bar").removeClass("chapter-bar-closed")
            $(this).parent().prev().children(".side-bar").addClass("prev")
            $(this).siblings(".chapter-content").toggleClass("chapter-content-open")
            $(this).siblings(".chapter-content").toggleClass("chapter-content-closed")
            $(this).parent().siblings(".open").children(".chapter-content-open").toggleClass("chapter-content-closed")
            $(this).parent().siblings(".open").children(".chapter-content-open").toggleClass("chapter-content-open")
            
            $(this).parent().siblings(".open").next().children(".side-bar").removeClass("chapter-bar-next")
            $(this).parent().siblings(".open").next().children(".side-bar").addClass("chapter-bar-closed")
            $(this).parent().siblings(".open").next().addClass("closed")
            $(this).parent().siblings(".open").removeClass("open")
            $(this).parent().addClass("open")
            $(this).addClass("open-bar")
            $(this).removeClass("prev")
            
            // $(this).parent().siblings(".open").children(".side-bar").toggleClass("open-bar")
            // $(this).parent().siblings(".open").children(".side-bar").toggleClass("prev")
            // $(this).parent().siblings(".open").children(".chapter-content-open").toggleClass("chapter-content-closed")
            // $(this).parent().siblings(".open").children(".chapter-content-open").toggleClass("chapter-content-open")
            // $(this).siblings(".chapter-content").toggleClass("chapter-content-open")
            // $(this).siblings(".chapter-content").toggleClass("chapter-content-closed")
            // $(this).siblings(".subchapter-nav").toggleClass("subchapter-nav-open")
            // $(this).parent().siblings(".open").children(".subchapter-nav").toggleClass("subchapter-nav-open")
            // $(this).parent().siblings(".open").toggleClass("open")
            // $(this).parent().addClass("open")
            // $(this).parent().next().removeClass("closed")
            // $(this).parent().next().children(".side-bar").removeClass("chapter-bar-closed")
            // $(this).parent().next().children(".side-bar").toggleClass("chapter-bar-next")
            // $(this).removeClass("chapter-bar-next")
            // $(this).addClass("open-bar")
    }
        


        // $(this).parent().next().children("chapter-bar").addClass("next")
        // $(this).parent().next().children("chapter-bar").addClass("chapter-bar-next")
        // $(this).parent().next().children("chapter-bar").removeClass("chapter-bar-closed")
        // $(this).parent().next().children("chapter-bar").removeClass("chapter-bar")
        // $(this).parent().next().removeClass("closed")
        // $(this).removeClass("next")
    
      })

    //   $(".prev").click(function(){
    //     alert("clicked")
    //   })

    //   $(".open-bar").click(function(){
    //     alert("clicked")
    //   })

      


    
});