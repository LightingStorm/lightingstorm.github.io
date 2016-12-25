var map;
var marker;
var cyrusMap = $('#cyrus-map');

function initMap() {
    map = new google.maps.Map(cyrusMap.get(0), {
        zoom: 14,
        center: {
            lat: 10.7607409,
            lng: 106.6829062
        }
    });

    marker = new google.maps.Marker({
        position: {
            lat: 10.7607409,
            lng: 106.6829062
        },
        map: map
    });
}