/*
    This script was originally part of David Millers (https://github.com/davidtmiller)
    Bootstrap theme "Freelancer" add some functionality to the contact form.

    Licensed under the Apache License 2.0. For more information take a look at the orignal
    repository unde https://github.com/IronSummitMedia/startbootstrap-freelancer.
*/

$(function() {
    $(window).load(function() {
      $('.flexslider1').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 240,
        itemMargin: 5,
        slideshow: true,
        minItems: 1,
        maxItems: 2
      });
      $('.flexslider2').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 240,
        itemMargin: 5,
        slideshow: true,
        minItems: 1,
        maxItems: 2
      });
      $('.flexslider3').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 250,
        itemMargin: 5,
        slideshow: true,
        minItems: 2,
        maxItems: 3
      });
    });
});

