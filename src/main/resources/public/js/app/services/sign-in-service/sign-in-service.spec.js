System.register(['angular2/testing', './sign-in-service'], function(exports_1) {
    var testing_1, sign_in_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (sign_in_service_1_1) {
                sign_in_service_1 = sign_in_service_1_1;
            }],
        execute: function() {
            testing_1.describe('SignInService Service', function () {
                testing_1.beforeEachProviders(function () { return [sign_in_service_1.SignInService]; });
                testing_1.it('should ...', testing_1.inject([sign_in_service_1.SignInService], function (service) {
                }));
            });
        }
    }
});
