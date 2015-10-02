const SELECTED_JOB = "SELECTED_JOB";

Template.jobList.helpers({
    jobs: function () {
        return Jobs.find({});
    },
    selectedName: function () {
        var job = Jobs.findOne(getSelectedJobId());
        return job && job.name;
    }
});

Template.job.helpers({
    isSelected: function () {
        return getSelectedJobId() == this._id;
    }
});

function getSelectedJobId() {
    return Session.get(SELECTED_JOB);
}

function setSelectedJobId(id) {
    Session.set(SELECTED_JOB, id);
}

getJobLocation = function() {
    var id = getSelectedJobId();
    var job = Jobs.findOne(id);
    return new google.maps.LatLng(job.latitude, job.longitude);
};

getJobName = function() {
    var job = Jobs.findOne(getSelectedJobId());
    return job.name;
};

Template.job.events({
    'click': function () {
        setSelectedJobId(this._id);
    }
});