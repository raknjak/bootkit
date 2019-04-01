// Sparkline generics
// ---------------------------------------------------------------------------------------------------------------------
var spkrlWidgetLine = function(el, color, minSpotColor, maxSpotColor, highlightLineColor, fillColor, height, spotRadius) {
    el.sparkline('html', {
        defaultPixelsPerValue : 5,
        enableTagOptions      : true,
        chartRangeMin         : 0,
        spotColor             : color,
        minSpotColor          : minSpotColor,
        maxSpotColor          : maxSpotColor,
        highlightLineColor    : highlightLineColor,
        lineColor             : color,
        fillColor             : fillColor,
        width                 : '100%',
        height                : height,
        highlightSpotColor    : color,
        spotRadius            : spotRadius
    });
};


// DOM is loaded
// ---------------------------------------------------------------------------------------------------------------------
!function ($) {

    $(function() {

        // LINE CHARTS
        // ---------------------------------------------------------------------------------------
        // function to init sparkline
        var spkrlInit = function() {
            spkrlWidgetLine(
                $(".sparkline-widget-white"),
                "#fff",
                "#fff",
                "#fff",
                "#fff",
                "",
                60,
                0
            );
        };

        // init at DOM loaded
        spkrlInit();

        // call debounced reinit on resize
        $(window).resize(function() {
            waitForFinalEvent(function() {
                spkrlInit();
            }, 250, "sparklines");
        });


        // BAR CHARTS
        // ---------------------------------------------------------------------------------------
        $('.bar-sparkline').sparkline('html', {
            enableTagOptions: true,
            chartRangeMin   : 0
        });


        // PIE CHARTS
        // ---------------------------------------------------------------------------------------
        $('.sparkpie').sparkline('html', {
            type: 'pie',
            height: '50px',
            sliceColors: ['#5EABF4', '#3E9BF2', '#98CAF8']
        });


    });

}(window.jQuery);