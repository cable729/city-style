Meteor.startup(function () {
    createJobFixtures();
});

function createJobFixtures() {
    Jobs.remove({});

    Jobs.insert({
        name: "Workpop",
        latitude: 34.0294373,
        longitude: -118.4706946,
        location: "Santa Monica, CA"
    });
    Jobs.insert({
        name: "ShipCompliant",
        latitude: 40.016512,
        longitude: -105.279842,
        location: "Boulder, CO"
    });
    Jobs.insert({
        name: "Dalton's House",
        latitude: 41.260751,
        longitude: -96.018611,
        location: "Omaha, NE"
    });
}