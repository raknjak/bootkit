// skycons
//http://stackoverflow.com/questions/24572100/skycons-cant-display-the-same-icon-twice
var skycons = new Skycons({"color": "#5EABF4"}),
    list  = [
        "clear-day", "clear-night", "partly-cloudy-day",
        "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
        "fog"
    ],
    i;

for(i = list.length; i--; ) {
    var weatherType = list[i],
        elements = document.getElementsByClassName( weatherType );
    for (e = elements.length; e--;){
        skycons.set( elements[e], weatherType );
    }
}

skycons.play();

!function ($) {

    $(function() {

        // Docs at http://simpleweatherjs.com

        /* Does your browser support geolocation? */
        if ("geolocation" in navigator) {
            $('.js-geolocation').show();
        } else {
            $('.js-geolocation').hide();
        }

        /* Where in the world are you? */
        $('.js-geolocation').on('click', function() {
            navigator.geolocation.getCurrentPosition(function(position) {
                loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
            });
        });

        /*
         * Test Locations
         * Austin lat/long: 30.2676,-97.74298
         * Austin WOEID: 2357536
         */
        $(document).ready(function() {
            loadWeather('Seattle',''); //@params location, woeid
        });

        function loadWeather(location, woeid) {
            $.simpleWeather({
                location: location,
                woeid: woeid,
                unit: 'f',
                success: function(weather) {
                    html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2><span class="bk-wth-tmp-alt bk-opacity-6"> or '+weather.alt.temp+'&deg;C</span>';
                    html += '<span class="bk-wth-region">'+weather.city+', '+ weather.region;
                    html += '<br><span class="bk-wth-cur pull-right">'+weather.currently+'</span></span>';

                    $("#weather").html(html);
                },
                error: function(error) {
                    $("#weather").html('<p>'+error+'</p>');
                }
            });
        }

    });

}(window.jQuery);