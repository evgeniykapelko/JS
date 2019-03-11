define(['ko'], function (ko) {
    'use strict';

    return function (config) {
        const title = ko.observable('This is a very fine title for a simple but  good view model');
        title.subscribe(function (newValue) {
           console.log('New value', newValue)
        });

        title.subscribe(function (oldValue) {
            console.log('Old value', oldValue)
        }, this, 'beforeChange');
        return {
            title: title,
            config: config
            /*getTitle: function () {
                return this.title;
            }*/
        }
    }
});