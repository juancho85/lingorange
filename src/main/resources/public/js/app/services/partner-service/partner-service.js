System.register(['angular2/core', "angular2/http"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var PartnerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            PartnerService = (function () {
                function PartnerService(http) {
                    this.http = http;
                }
                PartnerService.prototype.getPartners = function (criteria) {
                    if (criteria.partnerOfferedLanguageIso === 'fr') {
                        return this.http.get('/js/app/services/partner-service/mock-partners-offer-french.json')
                            .map(function (request) { return request.json(); });
                    }
                    else if (criteria.partnerOfferedLanguageIso === 'de') {
                        return this.http.get('/js/app/services/partner-service/mock-partners-offer-german.json')
                            .map(function (request) { return request.json(); });
                    }
                    else if (criteria.partnerOfferedLanguageIso === 'en') {
                        return this.http.get('/js/app/services/partner-service/mock-partners-offer-english.json')
                            .map(function (request) { return request.json(); });
                    }
                    else {
                        return this.http.get('/js/app/services/partner-service/empty.json')
                            .map(function (request) { return request.json(); });
                    }
                };
                PartnerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PartnerService);
                return PartnerService;
            })();
            exports_1("PartnerService", PartnerService);
        }
    }
});
