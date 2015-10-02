Meteor.startup(function() {
    GoogleMaps.load();
});

Template.map.onCreated(function() {
    GoogleMaps.ready('map', function(map) {
        createMarker();
        Tracker.autorun(updateMapLocation);
        Tracker.autorun(updateMarkerLocation);
    });
});

Template.map.helpers({
    mapOptions: function () {
        if (GoogleMaps.loaded()) {
            const defaultLosAngelesCoordinates = new google.maps.LatLng(34.0294373, -118.4606946);
            return {
                center: defaultLosAngelesCoordinates,
                scrollwheel: false,
                zoom: 12
            };
        }
    }
});

var marker;

const WORK_LABEL = "W";

function updateMarkerLocation() {
    marker.setPosition(getJobLocation());
}

function createMarker() {
    marker = new google.maps.Marker({
        map: getMap(),
        position: getJobLocation(),
        label: WORK_LABEL
    });
}

function updateMapLocation() {
    getMap().setCenter(getJobLocation());
}

function getMap() {
    return GoogleMaps.maps['map'].instance;
}