System.register(['angular2/testing', './partner-service'], function(exports_1) {
    var testing_1, partner_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (partner_service_1_1) {
                partner_service_1 = partner_service_1_1;
            }],
        execute: function() {
            testing_1.describe('PartnerService Service', function () {
                testing_1.beforeEachProviders(function () { return [partner_service_1.PartnerService]; });
                testing_1.it('should ...', testing_1.inject([partner_service_1.PartnerService], function (service) {
                }));
            });
        }
    }
});
