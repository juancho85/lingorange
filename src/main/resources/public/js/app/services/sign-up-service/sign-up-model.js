System.register([], function(exports_1) {
    var SignUpModel;
    return {
        setters:[],
        execute: function() {
            SignUpModel = (function () {
                function SignUpModel(username, password) {
                    this.username = username;
                    this.password = password;
                }
                return SignUpModel;
            })();
            exports_1("SignUpModel", SignUpModel);
        }
    }
});
