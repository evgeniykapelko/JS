define(['ko'], function (ko) {
    'use strict';

    return function () {
        const viewModel = {
            /*exchange_rates: ko.observableArray([
                {
                    currency_to: 'USD',
                    rate: 1.0
                }
            ])*/
            values: ko.observableArray([
                123,12,555,778
            ])
        };
        return viewModel;
    }
});
/**
 *  require('uiRegistry').get('startSimple').exchange_rates.push({currency_to: 'USD', rate: 0.68})
 *  require('uiRegistry').get('startSimple').exchange_rates.pop()
 *  require('uiRegistry').get('startSimple').exchange_rates()[1].rate = 'XXX'
 *  require('uiRegistry').get('startSimple').exchange_rates.splice(1,1,{currency_to: 'USD', rate: 0.5})
 *
 *
 *
 * */