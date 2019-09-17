(function($) {
    'use strict';

    // Tilføjer plugin til fn så det kan bruges normalt
    $.fn.font = function (options) {

        // Options
        // Sætter default options, hvis der ikke sendes noget med
        const defaultOptions = {
            font:{
                txtsize: '100px'
            }
        };

        const opts = $.extend(true, {}, defaultOptions, options);

        // Går gennem alle elementer der matcher selector = idx=index, el=element
        return this.each(function (idx, el) {
            $(el).css({
                'font-size': opts.font.txtsize
            });

            $(el).click(function () {
                $(this).fadeOut(3000);
            });

        });
    };

})(jQuery);