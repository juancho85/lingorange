System.register(['angular2/testing', './navigation'], function(exports_1) {
    var testing_1, navigation_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (navigation_1_1) {
                navigation_1 = navigation_1_1;
            }],
        execute: function() {
            testing_1.describe('Navigation Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(navigation_1.Navigation).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
