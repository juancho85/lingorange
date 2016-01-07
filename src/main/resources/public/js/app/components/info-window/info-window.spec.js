System.register(['angular2/testing', './info-window'], function(exports_1) {
    var testing_1, info_window_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (info_window_1_1) {
                info_window_1 = info_window_1_1;
            }],
        execute: function() {
            testing_1.describe('InfoWindow Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(info_window_1.InfoWindow).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
