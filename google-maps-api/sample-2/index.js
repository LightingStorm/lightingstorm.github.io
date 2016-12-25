var map;
var marker;
var cyrusMap = $('#cyrus-map');

var location = {
    lat: 10.7607409,
    lng: 106.6829062
};

function initMap() {
    map = new google.maps.Map(cyrusMap.get(0), {
        zoom: 14,
        center: location
    });

    marker = new google.maps.Marker({
        position: location,
        map: map
    });
}