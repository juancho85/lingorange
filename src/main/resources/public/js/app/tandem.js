System.register(['angular2/core', './components/navigation/navigation', './components/map/map', './components/sign-up/sign-up', './components/sign-in/sign-in', './components/user-partners/user-partners', './components/welcome/welcome', './components/notifications/notifications', './components/profile/profile', './components/search-partner/search-partner', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navigation_1, map_1, sign_up_1, sign_in_1, user_partners_1, welcome_1, notifications_1, profile_1, search_partner_1, router_1;
    var TandemApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navigation_1_1) {
                navigation_1 = navigation_1_1;
            },
            function (map_1_1) {
                map_1 = map_1_1;
            },
            function (sign_up_1_1) {
                sign_up_1 = sign_up_1_1;
            },
            function (sign_in_1_1) {
                sign_in_1 = sign_in_1_1;
            },
            function (user_partners_1_1) {
                user_partners_1 = user_partners_1_1;
            },
            function (welcome_1_1) {
                welcome_1 = welcome_1_1;
            },
            function (notifications_1_1) {
                notifications_1 = notifications_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            },
            function (search_partner_1_1) {
                search_partner_1 = search_partner_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TandemApp = (function () {
                function TandemApp(router) {
                    this.router = router;
                }
                TandemApp = __decorate([
                    core_1.Component({
                        selector: 'tandem-app',
                        providers: [],
                        templateUrl: 'js/app/tandem.html',
                        directives: [navigation_1.Navigation, map_1.Map, router_1.ROUTER_DIRECTIVES],
                        pipes: []
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/', name: 'SearchPartner', component: search_partner_1.SearchPartner }),
                        new router_1.Route({ path: '/welcome', name: 'Welcome', component: welcome_1.Welcome }),
                        new router_1.Route({ path: '/sign-in', name: 'SignIn', component: sign_in_1.SignIn }),
                        new router_1.Route({ path: '/partners', name: 'UserPartners', component: user_partners_1.UserPartners }),
                        new router_1.Route({ path: '/profile/:tab', name: 'Profile', component: profile_1.Profile }),
                        new router_1.Route({ path: '/notifications', name: 'Notifications', component: notifications_1.Notifications }),
                        new router_1.Route({ path: '/sign-up', name: 'SignUp', component: sign_up_1.SignUp })
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], TandemApp);
                return TandemApp;
            })();
            exports_1("TandemApp", TandemApp);
        }
    }
});
