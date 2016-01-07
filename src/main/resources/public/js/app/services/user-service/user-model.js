System.register([], function(exports_1) {
    var UserModel;
    return {
        setters:[],
        execute: function() {
            UserModel = (function () {
                function UserModel(username, requestedLanguages, offeredLanguages) {
                    if (username === void 0) { username = " "; }
                    if (requestedLanguages === void 0) { requestedLanguages = []; }
                    if (offeredLanguages === void 0) { offeredLanguages = []; }
                    this.username = username;
                    this.requestedLanguages = requestedLanguages;
                    this.offeredLanguages = offeredLanguages;
                }
                return UserModel;
            })();
            exports_1("UserModel", UserModel);
        }
    }
});
