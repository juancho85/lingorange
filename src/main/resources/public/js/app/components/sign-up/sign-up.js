System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var SignUp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SignUp = (function () {
                function SignUp() {
                    this.form = new common_1.ControlGroup({
                        title: new common_1.Control(),
                        action: new common_1.Control()
                    });
                    console.log(this.form);
                }
                SignUp = __decorate([
                    core_1.Component({
                        selector: 'sign-up',
                        templateUrl: 'js/app/components/sign-up/sign-up.html',
                        styleUrls: ['js/app/components/sign-up/sign-up.css'],
                        providers: [],
                        directives: [common_1.FORM_DIRECTIVES],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], SignUp);
                return SignUp;
            })();
            exports_1("SignUp", SignUp);
        }
    }
});
