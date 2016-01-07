System.register(['angular2/core', 'angular2/http'], function(exports_1) {
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
    var SignInService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SignInService = (function () {
                function SignInService(_http) {
                    this._http = _http;
                }
                SignInService.prototype.authenticate = function (user) {
                    var headers = new http_1.Headers({
                        authorization: 'Basic ' + btoa(user.username + ':' + user.password),
                        'X-Requested-With': 'XMLHttpRequest;charset=UTF-8',
                        'Content-type': 'application/json'
                    });
                    var headers = new http_1.Headers();
                    return this._http.post('/api/authenticate', JSON.stringify(user), { headers: headers });
                };
                SignInService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SignInService);
                return SignInService;
            })();
            exports_1("SignInService", SignInService);
        }
    }
});
