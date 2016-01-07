System.register(['angular2/testing', './partner-filter'], function(exports_1) {
    var testing_1, partner_filter_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (partner_filter_1_1) {
                partner_filter_1 = partner_filter_1_1;
            }],
        execute: function() {
            testing_1.describe('PartnerFilter Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(partner_filter_1.PartnerFilter).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
