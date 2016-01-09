System.register(['angular2/core', 'angular2/common', '../../services/sign-up-service/sign-up-service', "../../services/laguage-service/language-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, sign_up_service_1, language_service_1;
    var SignUp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (sign_up_service_1_1) {
                sign_up_service_1 = sign_up_service_1_1;
            },
            function (language_service_1_1) {
                language_service_1 = language_service_1_1;
            }],
        execute: function() {
            SignUp = (function () {
                function SignUp(_signUpService, _languageService) {
                    this._signUpService = _signUpService;
                    this._languageService = _languageService;
                    this.controlUsername = new common_1.Control('', common_1.Validators.required);
                    this.controlPassword = new common_1.Control('', common_1.Validators.required);
                    this.controlPasswordConfirmation = new common_1.Control('', common_1.Validators.required);
                    this.controlRequestedLanguages = new common_1.Control('', common_1.Validators.required);
                    this.controlOfferedLanguages = new common_1.Control('', common_1.Validators.required);
                    this.controlMainLocation = new common_1.Control('', common_1.Validators.required);
                    this.formGroup = new common_1.ControlGroup({
                        username: this.controlUsername,
                        password: this.controlPassword,
                        passwordConfirmation: this.controlPasswordConfirmation,
                        requestedLanguages: this.controlRequestedLanguages,
                        offeredLanguages: this.controlOfferedLanguages,
                        mainLocation: this.controlMainLocation,
                    });
                    this.languages = _languageService.getFullLanguageListForIsoCode('en');
                    console.log("languages:");
                    console.log(this.languages);
                }
                Object.defineProperty(SignUp.prototype, "controlGroupValue", {
                    get: function () {
                        return JSON.stringify(this.formGroup.value, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                SignUp.prototype.onLogin = function () {
                    if (this.formGroup.valid) {
                        this._signUpService.createUser(this.formGroup.value).subscribe(function (res) {
                            var response = res.json();
                            console.log('outcome sign in - response: ' + JSON.stringify(response, null, 2));
                            console.log('outcome sign in - response: ' + JSON.stringify(response, null, 2));
                        });
                    }
                };
                Object.defineProperty(SignUp.prototype, "selectedFields", {
                    get: function () {
                        var _this = this;
                        return Object.keys(this.formGroup.controls)
                            .filter(function (key) { return _this.formGroup.controls[key].value; });
                    },
                    enumerable: true,
                    configurable: true
                });
                SignUp = __decorate([
                    core_1.Component({
                        selector: 'sign-up',
                        templateUrl: 'js/app/components/sign-up/sign-up.html',
                        styleUrls: ['js/app/components/sign-up/sign-up.css'],
                        providers: [sign_up_service_1.SignUpService, language_service_1.LanguageService],
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgFor],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [sign_up_service_1.SignUpService, language_service_1.LanguageService])
                ], SignUp);
                return SignUp;
            })();
            exports_1("SignUp", SignUp);
        }
    }
});
