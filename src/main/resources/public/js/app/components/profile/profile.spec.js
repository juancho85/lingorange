System.register(['angular2/testing', './profile'], function(exports_1) {
    var testing_1, profile_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            }],
        execute: function() {
            testing_1.describe('Profile Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(profile_1.Profile).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
