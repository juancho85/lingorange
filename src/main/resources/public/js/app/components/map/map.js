System.register(['angular2/core', '../../services/user-service/user-service', '../partner-filter/partner-filter', '../info-window/info-window', '../../services/partner-service/partner-service', './map-default-options'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1, partner_filter_1, info_window_1, partner_service_1, map_default_options_1;
    var Map;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (partner_filter_1_1) {
                partner_filter_1 = partner_filter_1_1;
            },
            function (info_window_1_1) {
                info_window_1 = info_window_1_1;
            },
            function (partner_service_1_1) {
                partner_service_1 = partner_service_1_1;
            },
            function (map_default_options_1_1) {
                map_default_options_1 = map_default_options_1_1;
            }],
        execute: function() {
            Map = (function () {
                function Map(element, renderer, _userService, _partnerService) {
                    this._userService = _userService;
                    this._partnerService = _partnerService;
                    this.partnerResults = [];
                    this.markers = [];
                    renderer.setElementClass(element, 'map-canvas', true);
                    var container = element.nativeElement.querySelector('.map-inner');
                    this.gMap = new google.maps.Map(container, map_default_options_1.MAP_DEFAULT_OPTIONS);
                }
                Map.prototype.launchFilteredSearch = function (criteria) {
                    var _this = this;
                    this.removeMarkers();
                    this._partnerService.getPartners(criteria).subscribe(function (res) {
                        res.forEach(function (partner) {
                            var gMarker = {
                                map: _this.gMap,
                                lat: partner.locations[0].lat,
                                lng: partner.locations[0].lng,
                                label: partner.username,
                                partner: partner
                            };
                            _this.addMarker(gMarker, partner);
                            _this.partnerResults = res;
                        });
                    });
                };
                Map.prototype.showPartner = function (partner) {
                    this.selectedPartner = partner;
                };
                Map.prototype.resetSelectedPartner = function () {
                    this.selectedPartner = null;
                };
                Map.prototype.removeMarkers = function () {
                    this.markers.forEach(function (marker) { return marker.setMap(null); });
                };
                Map.prototype.addMarker = function (opts, partner) {
                    opts.position = {
                        lat: opts.lat,
                        lng: opts.lng
                    };
                    var gMarker = new google.maps.Marker(opts);
                    this._on({
                        obj: gMarker,
                        eventName: 'click',
                        callback: function () {
                            this.showPartner(partner);
                        }
                    });
                    this.markers.push(gMarker);
                };
                Map.prototype._on = function (opts) {
                    var self = this;
                    google.maps.event.addListener(opts.obj, opts.eventName, function (e) {
                        opts.callback.call(self, e, opts.obj);
                    });
                };
                Map = __decorate([
                    core_1.Component({
                        selector: 'map',
                        templateUrl: 'js/app/components/map/map.html',
                        styleUrls: ['js/app/components/map/map.css'],
                        providers: [user_service_1.UserService, partner_service_1.PartnerService],
                        directives: [partner_filter_1.PartnerFilter, info_window_1.InfoWindow],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, user_service_1.UserService, partner_service_1.PartnerService])
                ], Map);
                return Map;
            })();
            exports_1("Map", Map);
        }
    }
});
