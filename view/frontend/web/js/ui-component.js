define(['uiElement'], function (UiElement) {
    'use strict';

    return UiElement.extend({
        defaults: {
            template: 'Learning_JS/ui-component-template',
            label: "My first UiComponent",
            values: ['one', 'two', 'tree', 'four']
        }
    });
});