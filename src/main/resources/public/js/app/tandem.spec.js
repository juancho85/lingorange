System.register(['angular2/testing', '../app/tandem'], function(exports_1) {
    var testing_1, tandem_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (tandem_1_1) {
                tandem_1 = tandem_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [tandem_1.TandemApp]; });
        }
    }
});
