/*
    This script was originally part of David Millers (https://github.com/davidtmiller)
    Bootstrap theme "Freelancer" add some functionality to the contact form.

    Licensed under the Apache License 2.0. For more information take a look at the orignal
    repository unde https://github.com/IronSummitMedia/startbootstrap-freelancer.
*/

$(function() {
    $(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 600,
        itemMargin: 5,
        //slideshow: true,
        //controlNav: "thumbnails",
        minItems: 3,
        maxItems: 5
        //slideshow: true,
        //animationLoop: true,
      });
    });
});

