$('.slider .owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
     autoplayTimeout: 3000,
   autoplay:true,
  autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:2
        },
         980:{
            items:3
        },
        1024:{
            items:4
        }
    }
})



$('.compny-logo .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
     autoplayTimeout: 3000,
   autoplay:true,
  autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:2
        },
        980:{
            items:4
        },
        1024:{
            items:5
        }
    }
})


/////       menu      ////////////////////////////


   document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "right-front"
                       },
                       "theme": "light"
                    });
                }
            );


        /////////////////////




   /////////////    tabing      //////////////


// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


/////////////////////////