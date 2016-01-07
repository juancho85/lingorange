System.register(['angular2/testing', './profile-personal-info'], function(exports_1) {
    var testing_1, profile_personal_info_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (profile_personal_info_1_1) {
                profile_personal_info_1 = profile_personal_info_1_1;
            }],
        execute: function() {
            testing_1.describe('ProfilePersonalInfo Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(profile_personal_info_1.ProfilePersonalInfo).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
