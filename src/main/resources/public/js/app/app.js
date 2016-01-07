System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', 'angular2/core', './tandem'], function(exports_1) {
    var browser_1, router_1, http_1, core_1, tandem_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tandem_1_1) {
                tandem_1 = tandem_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(tandem_1.TandemApp, [router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                http_1.HTTP_PROVIDERS]);
        }
    }
});
