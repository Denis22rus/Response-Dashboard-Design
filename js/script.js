window.addEventListener('DOMContentLoaded', function () {
    const burger = require('./modules/burger');
    const side = require('./modules/side');
    const search = require('./modules/search');
    const toggl = require('./modules/toggl');

    burger();
    side();
    search();
    toggl();
});