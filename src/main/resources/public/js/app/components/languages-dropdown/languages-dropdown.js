System.register(['angular2/core', "../../services/laguage-service/language-service", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, language_service_1, common_1;
    var LanguagesDropdown;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (language_service_1_1) {
                language_service_1 = language_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            LanguagesDropdown = (function () {
                function LanguagesDropdown(_languageService) {
                    this._languageService = _languageService;
                    this.languages = _languageService.getFullLanguageListForIsoCode('en');
                    console.log("MyControl:");
                    console.log(this.myControl);
                }
                __decorate([
                    core_1.Input('id'), 
                    __metadata('design:type', Object)
                ], LanguagesDropdown.prototype, "id", void 0);
                __decorate([
                    core_1.Input('control'), 
                    __metadata('design:type', Object)
                ], LanguagesDropdown.prototype, "myControl", void 0);
                LanguagesDropdown = __decorate([
                    core_1.Component({
                        selector: 'languages-dropdown',
                        templateUrl: 'js/app/components/languages-dropdown/languages-dropdown.html',
                        styleUrls: ['js/app/components/languages-dropdown/languages-dropdown.css'],
                        providers: [language_service_1.LanguageService],
                        directives: [common_1.NgFor, common_1.FORM_DIRECTIVES],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [language_service_1.LanguageService])
                ], LanguagesDropdown);
                return LanguagesDropdown;
            })();
            exports_1("LanguagesDropdown", LanguagesDropdown);
        }
    }
});
