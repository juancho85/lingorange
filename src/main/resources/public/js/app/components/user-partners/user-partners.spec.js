System.register(['angular2/testing', './user-partners'], function(exports_1) {
    var testing_1, user_partners_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (user_partners_1_1) {
                user_partners_1 = user_partners_1_1;
            }],
        execute: function() {
            testing_1.describe('UserPartners Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(user_partners_1.UserPartners).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
