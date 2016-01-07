System.register(['angular2/testing', './search-partner'], function(exports_1) {
    var testing_1, search_partner_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (search_partner_1_1) {
                search_partner_1 = search_partner_1_1;
            }],
        execute: function() {
            testing_1.describe('SearchPartner Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(search_partner_1.SearchPartner).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
