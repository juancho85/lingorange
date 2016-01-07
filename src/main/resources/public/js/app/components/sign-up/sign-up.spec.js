System.register(['angular2/testing', './sign-up'], function(exports_1) {
    var testing_1, sign_up_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (sign_up_1_1) {
                sign_up_1 = sign_up_1_1;
            }],
        execute: function() {
            testing_1.describe('SignUp Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(sign_up_1.SignUp).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
