System.register(['angular2/testing', './sign-in'], function(exports_1) {
    var testing_1, sign_in_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (sign_in_1_1) {
                sign_in_1 = sign_in_1_1;
            }],
        execute: function() {
            testing_1.describe('SignIn Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(sign_in_1.SignIn).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
