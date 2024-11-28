$( document ).ready(function() {

  var totalsubchapters;
  var currentsubchapterno;
//index function
  $(".index-button").click(function(){

    $(".index").slideToggle(500)


  })

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

                $(this).siblings(".subchapter-nav").removeClass("subchapter-nav-closed")
                $(this).siblings(".subchapter-nav").addClass("subchapter-nav-open")
                $(this).parent().siblings(".open").children(".subchapter-nav").toggleClass("subchapter-nav-open")
                $(this).parent().siblings(".open").children(".subchapter-nav").toggleClass("subchapter-nav-closed")



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
            
            $(this).siblings(".subchapter-nav").removeClass("subchapter-nav-closed")
            $(this).siblings(".subchapter-nav").addClass("subchapter-nav-open")
            $(this).parent().siblings(".open").children(".subchapter-nav").removeClass("subchapter-nav-open")
            $(this).parent().siblings(".open").children(".subchapter-nav").addClass("subchapter-nav-closed")

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

    $(".button").click(function(){
          // Target the element you want to scroll to the top of
          // const element = $('.subchapter-2'); 
          // element.scrollTop(0); 
        //   console.log($(".subchapter-2").offset().top)
        //   $(".chapter-content-open").animate({
        //     scrollTop: $(".subchapter-2").offset().top + - 60
        // }, 2000);
      //   $('.chapter-content-open').animate({
      //     scrollTop: $('.subchapter-2').position().top
      // }, 1000);

      $('.chapter-content-open').animate({
        scrollTop: $('.subchapter-2').offset().top - $('.chapter-content-open').offset().top + $('.chapter-content-open').scrollTop()
    }, 1600);
    })


// Create a new IntersectionObserver instance
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  threshold: 0.1 // Trigger when at least 10% of the element is visible
});

// Target all elements with the class 'chapter-main-content'
document.querySelectorAll('.chapter-main-content').forEach(div => {
  observer.observe(div);
});
    
var lastsubchapter = 0;
var subchapcount = 0;
let remaininghtml = ''

function countSubchapters() {
  totalsubchapters= ($(".chapter-content-open").children(".chapter-main-content").length)
  console.log(totalsubchapters)
}

countSubchapters()


var lastsubchapter = 0;
var subchapcount = 0;


for (let x= 0; x<totalsubchapters-1; x++){
  remaininghtml += `<div class="upcoming-subchapter">
    1.${x+2}
  </div>`
}

$(".upcoming-subchapters-container").html(remaininghtml)



console.log(remaininghtml)
console.log(totalsubchapters + "total-subchapters")

// call when we have a new subchapter enters the viewport 
function handleIntersection(entries, observer) {
  subchapcount = subchapcount + 1
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // The div is entering the viewport

          
          const element = entry.target;
          const dataId = element.dataset.subchapter;
          console.log(element + "element")
          const remaining = totalsubchapters - dataId
          const previous = totalsubchapters - (remaining + 1)
          direction = dataId - lastsubchapter
          let previoushtml = ''

          console.log(Number(dataId)  +"subchapter")
          function changeChapter1(){

            $(".subchapter-nav-title").fadeOut(300)

              if (Number(dataId)== 1){

                setTimeout(() => {
                  $(".subchapter-nav-title").html("More humans, <br> fewer problems")
                }, 300);
                
              }
  
              if (Number(dataId)== 2){
    
                setTimeout(() => {
                  $(".subchapter-nav-title").html("What is aging?")
                }, 300);
              }
  
               if (Number(dataId)== 3){
                setTimeout(() => {
                  $(".subchapter-nav-title").html("Mortality, productivity, <br> and fertility in the U.S.")
                }, 300);
                 
              }
      
              $(".subchapter-nav-title").fadeIn();
          }

          
          
          if (subchapcount >1){
            changeChapter1()

              $(".current-subchapter-number-container").children().last().html(`1.${dataId}`)
              // $(".subchapter-nav-title")
              if (direction == 1){
     
                  previoushtml += `<div class="previous-subchapter">
                  </div>`

                  $(".previous-subchapters-container").append(previoushtml)
                  $('.previous-subchapters-container').children().last()
                  .css('padding-bottom', '0') 
                  .stop()  
                  .animate({ paddingBottom: '16px' }, 500);

              $(".upcoming-subchapters-container").children().first()
              .css('height', '72px')  
              .animate({ height: '0px' }, 500, function() {
                $(this).remove();
              });

              }
              else{
                $('.previous-subchapters-container').children().first()
                .css('padding-bottom', '16px')  
                .animate({ paddingBottom: '0px' }, 500, function() {
                  $(this).remove();
                });

                remaininghtml = `<div class="upcoming-subchapter">
                1.${Number(dataId) + 1}
                </div>`

                // $(".subchapter-nav-title").html()
                
                // $(".upcoming-subchapters-container").append(remaininghtml)
                $(".upcoming-subchapters-container").prepend(remaininghtml)
                $('.upcoming-subchapters-container').children().last()
                .css('height', '0') // set initial state
                .stop()  // ensures any previous animation is stopped before 
                .animate({ height: '72px' }, 500);
               
                      
              }
            }
              lastsubchapter = dataId
              
      }
  });
}


      


});