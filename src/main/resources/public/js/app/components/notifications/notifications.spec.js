System.register(['angular2/testing', './notifications'], function(exports_1) {
    var testing_1, notifications_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (notifications_1_1) {
                notifications_1 = notifications_1_1;
            }],
        execute: function() {
            testing_1.describe('Notifications Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(notifications_1.Notifications).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
