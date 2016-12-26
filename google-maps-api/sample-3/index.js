var map;
var origin;
var destination;

var cyrusMap = $('#cyrus-map');
var btnSearch = $('#btn-search');
var txtOrigin = $('#txt-origin');
var txtDestination = $('#txt-destination');

btnSearch.on('click', searchDirection);

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

function searchDirection() {
    origin = txtOrigin.val();
    destination = txtDestination.val();

    $.ajax({
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/directions/json',
        data: {
            'origin': origin,
            'destination': destination,
            'key': 'AIzaSyBkds9ggyRFpcqMms_ilugLUZaflz-UQSU'
        }
    }).done(function(res) {
        console.log(res);
    }).fail(function(err) {
        console.error(err);
    });
}