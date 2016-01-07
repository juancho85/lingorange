System.register(['angular2/testing', './welcome'], function(exports_1) {
    var testing_1, welcome_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (welcome_1_1) {
                welcome_1 = welcome_1_1;
            }],
        execute: function() {
            testing_1.describe('Welcome Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(welcome_1.Welcome).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
