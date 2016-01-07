System.register(['angular2/core', 'angular2/common', '../../services/sign-in-service/sign-in-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, sign_in_service_1;
    var SignIn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (sign_in_service_1_1) {
                sign_in_service_1 = sign_in_service_1_1;
            }],
        execute: function() {
            SignIn = (function () {
                function SignIn(_signInService) {
                    this._signInService = _signInService;
                    this.controlUsername = new common_1.Control('', common_1.Validators.required);
                    this.controlPassword = new common_1.Control('', common_1.Validators.required);
                    this.formGroup = new common_1.ControlGroup({
                        username: this.controlUsername,
                        password: this.controlPassword
                    });
                }
                Object.defineProperty(SignIn.prototype, "controlGroupValue", {
                    get: function () {
                        return JSON.stringify(this.formGroup.value, null, 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                SignIn.prototype.onLogin = function () {
                    if (this.formGroup.valid) {
                        this._signInService.authenticate(this.formGroup.value).subscribe(function (res) {
                            var response = res.json();
                            console.log('outcome sign in - response: ' + JSON.stringify(response, null, 2));
                            console.log('outcome sign in - response: ' + JSON.stringify(response, null, 2));
                        });
                    }
                };
                SignIn = __decorate([
                    core_1.Component({
                        selector: 'sign-in',
                        templateUrl: 'js/app/components/sign-in/sign-in.html',
                        styleUrls: ['js/app/components/sign-in/sign-in.css'],
                        providers: [sign_in_service_1.SignInService],
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgIf],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [sign_in_service_1.SignInService])
                ], SignIn);
                return SignIn;
            })();
            exports_1("SignIn", SignIn);
        }
    }
});
