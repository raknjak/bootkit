// DOM is loaded
// ---------------------------------------------------------------------------------------------------------------------
!function ($) {

    $(function() {

        $('.bk-scroll').slimscroll(
            {
                distance: '0',
                color: '#fff',
                railVisible: true,
                railColor: '#87CC64',
                size: '3px',
                height: '300px'
            }
        );

        if ($("#js-gmap-marker").length > 0) {
            function initialize() {
                var mapOptions = {
                    center: new google.maps.LatLng(50.85034, 4.35171),
                    zoom: 10,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById("js-gmap-marker"), mapOptions);

                var marker = new google.maps.Marker({
                    position: mapOptions.center,
                    map: map,
                    title:"Hello World!"
                });
            }

            google.maps.event.addDomListener(window, 'load', initialize);
            google.maps.event.addDomListener(window, "resize", function() {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });
        }


        if ($("#js-gmap-marker2").length > 0) {
            function initialize2() {
                var mapOptions = {
                    center: new google.maps.LatLng(50.85034, 4.35171),
                    zoom: 10,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map2 = new google.maps.Map(document.getElementById("js-gmap-marker2"), mapOptions);

                var marker = new google.maps.Marker({
                    position: mapOptions.center,
                    map: map2,
                    title:"Hello World!"
                });
            }

            google.maps.event.addDomListener(window, 'load', initialize2);
            google.maps.event.addDomListener(window, "resize", function() {
                var center = map2.getCenter();
                google.maps.event.trigger(map2, "resize");
                map2.setCenter(center);
            });
        }


    });

}(window.jQuery);