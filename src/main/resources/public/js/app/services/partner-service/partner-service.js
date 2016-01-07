System.register(['angular2/core', './mock-partners'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_partners_1;
    var PartnerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_partners_1_1) {
                mock_partners_1 = mock_partners_1_1;
            }],
        execute: function() {
            PartnerService = (function () {
                function PartnerService() {
                }
                PartnerService.prototype.getPartners = function (criteria) {
                    if (criteria.partnerOfferedLanguage === 'French') {
                        return Promise.resolve(mock_partners_1.MOCK_PARTNERS_OFFER_FRENCH);
                    }
                    else if (criteria.partnerOfferedLanguage === 'German') {
                        return Promise.resolve(mock_partners_1.MOCK_PARTNERS_OFFER_GERMAN);
                    }
                    else if (criteria.partnerOfferedLanguage === 'English') {
                        return Promise.resolve(mock_partners_1.MOCK_PARTNERS_OFFER_ENGLISH);
                    }
                    else {
                        return Promise.resolve(mock_partners_1.MOCK_PARTNERS_OFFER_ITALIAN);
                    }
                };
                PartnerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PartnerService);
                return PartnerService;
            })();
            exports_1("PartnerService", PartnerService);
        }
    }
});
