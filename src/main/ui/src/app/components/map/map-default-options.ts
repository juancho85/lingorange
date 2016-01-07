declare var google:any;

export var MAP_DEFAULT_OPTIONS = {
    center: {
        lat: 40.4198305,
        lng: -3.7048106
    },
    zoom: 10,
    disableDefaultUI: false,
    scrollwheel: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM,
        style: google.maps.ZoomControlStyle.SMALL
    },
    panControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
    }
}