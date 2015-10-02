Meteor.startup(function() {
    GoogleMaps.load();
});

Template.map.onCreated(function() {
    GoogleMaps.ready('map', function(map) {
        Tracker.autorun(updateMapLocation);
    });
});

Template.map.helpers({
    mapOptions: function () {
        if (GoogleMaps.loaded()) {
            const defaultLosAngelesCoordinates = new google.maps.LatLng(34.0294373, -118.4606946);
            return {
                center: defaultLosAngelesCoordinates,
                zoom: 12
            };
        }
    }
});

function updateMapLocation() {
    getMap().setCenter(getJobLocation());
}

function getMap() {
    return GoogleMaps.maps['map'].instance;
}