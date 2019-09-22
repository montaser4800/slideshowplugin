(function($) {
    'use strict';

    // Tilføjer plugin til fn så det kan bruges normalt
    $.fn.slideshow = function (options) {

        // Options
        // Sætter default options, hvis der ikke sendes noget med
        const defaultOptions = {
            nav:{
                arrows: "block",
                arrowColor: "red",
                arrowSize: "15px"
            },

            fadeAnimation:{
             fadeInSpeed: 1500
            }

        };

        const opts = $.extend(true, {}, defaultOptions, options);

        // Går gennem alle elementer der matcher selector = idx=index, el=element
        return this.each(function (idx, el) {

            // Grundscriptede for slideshowet
            $(".active").show();

            $(el).find(".next").click(function () {

                let currentImg = $(".active");
                let nextImg = currentImg.next();

                if(nextImg.length){
                    currentImg.removeClass("active").hide();
                    nextImg.addClass("active").fadeIn(opts.fadeAnimation.fadeInSpeed);
                }
            });

            $(el).find(".prev").click(function () {

                let currentImg = $(".active");
                let prevImg = currentImg.prev();

                if(prevImg.length){
                    currentImg.removeClass("active").hide();
                    prevImg.addClass("active").fadeIn(opts.fadeAnimation.fadeInSpeed);
                }

            });

            $(el).find(".next, .prev").css("display", opts.nav.arrows);

            $(el).find(".next").css("color", opts.nav.arrowColor);
            $(el).find(".prev").css("color", opts.nav.arrowColor);

            $(el).find(".next").css({
                "border-top-width" : opts.nav.arrowSize,
                "border-bottom-width" : opts.nav.arrowSize,
                "border-left-width" : opts.nav.arrowSize
            });
            $(el).find(".prev").css({
                "border-top-width" : opts.nav.arrowSize,
                "border-bottom-width" : opts.nav.arrowSize,
                "border-right-width" : opts.nav.arrowSize
            });
        });

    };

})(jQuery);