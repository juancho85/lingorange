System.register(['angular2/core', '../../services/partner-service/partner-service', '../../services/partner-service/partner-filter-criteria', 'angular2/common', "../../pipes/language-joiner-pipe/language-joiner-pipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, partner_service_1, partner_filter_criteria_1, common_1, language_joiner_pipe_1;
    var UserPartners;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (partner_service_1_1) {
                partner_service_1 = partner_service_1_1;
            },
            function (partner_filter_criteria_1_1) {
                partner_filter_criteria_1 = partner_filter_criteria_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (language_joiner_pipe_1_1) {
                language_joiner_pipe_1 = language_joiner_pipe_1_1;
            }],
        execute: function() {
            UserPartners = (function () {
                function UserPartners(_partnerService) {
                    this._partnerService = _partnerService;
                    var criteria = new partner_filter_criteria_1.PartnerFilterCriteria('en', 'es');
                    this.partners = this._partnerService.getPartners(criteria);
                    this.partners.subscribe(function (res) { return console.log(res); });
                    console.log(this.partners);
                }
                UserPartners.prototype.unfollow = function () {
                    console.log("unfollow");
                };
                UserPartners.prototype.sendMessage = function () {
                    console.log("send message");
                };
                UserPartners = __decorate([
                    core_1.Component({
                        selector: 'notifications',
                        templateUrl: 'js/app/components/user-partners/user-partners.html',
                        styleUrls: ['js/app/components/user-partners/user-partners.css'],
                        providers: [partner_service_1.PartnerService],
                        directives: [common_1.NgFor],
                        pipes: [language_joiner_pipe_1.LanguageJoinerPipe]
                    }), 
                    __metadata('design:paramtypes', [partner_service_1.PartnerService])
                ], UserPartners);
                return UserPartners;
            })();
            exports_1("UserPartners", UserPartners);
        }
    }
});
