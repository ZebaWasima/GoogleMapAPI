var geo = {};
window.onload = function() {
    var latlng = new google.maps.LatLng(20.5937, 78.9629),
        options  = {
            zoom               : 4,
            mapTypeId          : google.maps.MapTypeId.TERRAIN,
            center             : latlng,
            streetViewControl  : true,
            scaleControl       : true,
            scrollwheel        : true,
            mapTypeControl     : true,
            overviewMapControl : true,
            panControlOptions  : {
                position         : google.maps.ControlPosition.TOP_LEFT
            },
            zoomControlOptions : {
                position         : google.maps.ControlPosition.TOP_LEFT
            }
        };
        map    = new google.maps.Map(document.getElementById('map_canvas'), options),
        marker = new google.maps.Marker({
            position  : latlng,
            map       : map,
            draggable : false
        }),
        geocoder = new google.maps.Geocoder(),
        search = document.getElementById('search'), 
        query = document.getElementById('query');

    function codeAddress() {
        var address = query.value;
        geocoder.geocode( { 'address': address}, function(results, status) {
            console.log(results);
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    };

    search.onclick = function() {
        codeAddress(); 
    };
};