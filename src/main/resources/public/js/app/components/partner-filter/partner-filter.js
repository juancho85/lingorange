System.register(['angular2/core', '../../services/user-service/user-service', './partner-filter-criteria', "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1, partner_filter_criteria_1, common_1;
    var PartnerFilter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (partner_filter_criteria_1_1) {
                partner_filter_criteria_1 = partner_filter_criteria_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            PartnerFilter = (function () {
                function PartnerFilter(_userService) {
                    var _this = this;
                    this._userService = _userService;
                    this.controlRequestedLanguage = new common_1.Control('', common_1.Validators.required);
                    this.controlOfferedLanguage = new common_1.Control('', common_1.Validators.required);
                    this.formGroup = new common_1.ControlGroup({
                        requestedLanguage: this.controlRequestedLanguage,
                        offeredLanguage: this.controlOfferedLanguage
                    });
                    this.filterPartners = new core_1.EventEmitter();
                    this._userService.getCurrentUserObs()
                        .subscribe(function (res) {
                        _this.userRequestedLanguages = res.requestedLanguages;
                        _this.userOfferedLanguages = res.offeredLanguages;
                    });
                }
                Object.defineProperty(PartnerFilter.prototype, "controlGroupValue", {
                    get: function () {
                        return JSON.stringify(this.formGroup.value, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                PartnerFilter.prototype.searchPartners = function (element) {
                    jQuery(element).modal('hide');
                    if (this.formGroup.valid) {
                        this.partnerFilterCriteria = new partner_filter_criteria_1.PartnerFilterCriteria(this.controlRequestedLanguage.value, this.controlOfferedLanguage.value);
                        this.filterPartners.emit(this.partnerFilterCriteria);
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PartnerFilter.prototype, "filterPartners", void 0);
                PartnerFilter = __decorate([
                    core_1.Component({
                        selector: 'partner-filter',
                        templateUrl: 'js/app/components/partner-filter/partner-filter.html',
                        styleUrls: ['js/app/components/partner-filter/partner-filter.css'],
                        providers: [user_service_1.UserService],
                        directives: [common_1.FORM_DIRECTIVES],
                        pipes: [],
                        events: ['filterPartners']
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], PartnerFilter);
                return PartnerFilter;
            })();
            exports_1("PartnerFilter", PartnerFilter);
        }
    }
});
