System.register(['angular2/core', 'angular2/router', 'angular2/common', '../profile-availability/profile-availability', '../profile-languages/profile-languages', '../profile-locations/profile-locations', '../profile-personal-info/profile-personal-info'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, profile_availability_1, profile_languages_1, profile_locations_1, profile_personal_info_1;
    var Profile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (profile_availability_1_1) {
                profile_availability_1 = profile_availability_1_1;
            },
            function (profile_languages_1_1) {
                profile_languages_1 = profile_languages_1_1;
            },
            function (profile_locations_1_1) {
                profile_locations_1 = profile_locations_1_1;
            },
            function (profile_personal_info_1_1) {
                profile_personal_info_1 = profile_personal_info_1_1;
            }],
        execute: function() {
            Profile = (function () {
                function Profile(params) {
                    this.tabs = [
                        { id: 'personal-info', name: 'Personal Information' },
                        { id: 'languages', name: 'Languages' },
                        { id: 'availability', name: 'Availability' },
                        { id: 'locations', name: 'Locations' }
                    ];
                    this.tabId = params.get('tab');
                }
                Profile.prototype.isTabActive = function (tabId) {
                    return tabId === this.tabId;
                };
                Profile.prototype.setSelectedTab = function (tabId) {
                    this.tabId = tabId;
                };
                Profile = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        templateUrl: 'js/app/components/profile/profile.html',
                        styleUrls: ['js/app/components/profile/profile.css'],
                        providers: [],
                        directives: [common_1.NgFor, router_1.ROUTER_DIRECTIVES, profile_availability_1.ProfileAvailability, profile_languages_1.ProfileLanguages, profile_locations_1.ProfileLocations, profile_personal_info_1.ProfilePersonalInfo],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], Profile);
                return Profile;
            })();
            exports_1("Profile", Profile);
        }
    }
});
