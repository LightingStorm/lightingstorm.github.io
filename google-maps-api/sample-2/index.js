var map;
var cyrusMap = $('#cyrus-map');

function initMap() {
    map = new google.maps.Map(cyrusMap.get(0), {
        zoom: 14,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        center: {
            lat: 10.7607409,
            lng: 106.6829062
        }
    });
}

