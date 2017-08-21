
    $(document).ready(function() {
         $('#a').hide().delay(400).fadeIn(2200);
         $('#b').hide().delay(600).fadeIn(2200);
         $('#c').hide().delay(800).fadeIn(2200);
         $('#d').hide().delay(1000).fadeIn(2200);

         (function($) {
             "use strict"; // Start of use strict

             // jQuery for page scrolling feature - requires jQuery Easing plugin
             $('.page-scroll a').bind('click', function(event) {
                 var $anchor = $(this);
                 $('html, body').stop().animate({
                     scrollTop: ($($anchor.attr('href')).offset().top - 50)
                 }, 1250, 'easeInOutExpo');
                 event.preventDefault();
             });

             // Highlight the top nav as scrolling occurs
             $('body').scrollspy({
                 target: '.navbar-fixed-top',
                 offset: 51
             });

             // Closes the Responsive Menu on Menu Item Click
             $('.navbar-collapse ul li a').click(function(){
                     $('.navbar-toggle:visible').click();
             });

             // Offset for Main Navigation
             $('#mainNav').affix({
                 offset: {
                     top: 100
                 }
             });
   });
