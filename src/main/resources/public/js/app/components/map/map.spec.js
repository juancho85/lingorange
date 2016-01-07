System.register(['angular2/testing', './map'], function(exports_1) {
    var testing_1, map_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (map_1_1) {
                map_1 = map_1_1;
            }],
        execute: function() {
            testing_1.describe('Map Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(map_1.Map).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
