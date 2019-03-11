define(['ko'], function (ko) {
    'use strict';

    return function () {
        const viewModel = {
            exchange_rates: ko.observableArray([
                {
                    currency_to: 'USD',
                    rate: 1.0
                },
                {
                    currency_to: 'EUR',
                    rate: 0.83
                },
                {
                    currency_to: 'NZD',
                    rate: 1.43
                }
            ])
        };
        return viewModel;
    }
});