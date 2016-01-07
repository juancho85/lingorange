System.register(['angular2/testing', './user-service'], function(exports_1) {
    var testing_1, user_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            testing_1.describe('User Service', function () {
                testing_1.beforeEachProviders(function () { return [user_service_1.UserService]; });
                testing_1.it('should ...', testing_1.inject([user_service_1.UserService], function (service) {
                }));
            });
        }
    }
});
