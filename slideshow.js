(function($) {
    'use strict';

    // Tilføjer plugin til fn så det kan bruges normalt
    $.fn.slideshow = function (options) {

        // Options
        // Sætter default options, hvis der ikke sendes noget med
        const defaultOptions = {
            nav:{
                arrows: "block"
            },
            fadeAnimation:{
                fadeInSpeed: 1000
            },
            autoplaySpeed:1000

        };

        const opts = $.extend(true, {}, defaultOptions, options);

        // Går gennem alle elementer der matcher selector = idx=index, el=element
        return this.each(function (idx, el) {

            // Grundscriptede for slideshowet
            $(".active").show();

            setInterval(function () {
                let currentImg = $(".active");
                let nextImg = currentImg.next();

                if(nextImg.length){
                    currentImg.removeClass("active").hide();
                    nextImg.addClass("active").fadeIn(opts.fadeAnimation.fadeInSpeed);
                }
            }, opts.autoplaySpeed);

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
                    prevImg.addClass("active").fadeIn();
                }

            });



        });

    };

})(jQuery);