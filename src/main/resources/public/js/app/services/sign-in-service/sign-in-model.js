System.register([], function(exports_1) {
    var SignInModel;
    return {
        setters:[],
        execute: function() {
            SignInModel = (function () {
                function SignInModel(username, password) {
                    this.username = username;
                    this.password = password;
                }
                return SignInModel;
            })();
            exports_1("SignInModel", SignInModel);
        }
    }
});
