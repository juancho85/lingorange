System.register([], function(exports_1) {
    var UserModel;
    return {
        setters:[],
        execute: function() {
            UserModel = (function () {
                function UserModel(id, username, requestedLanguages, offeredLanguages, locations, authenticated, picUrl, genderCode, dateOfBirth, locale) {
                    this.id = id;
                    this.username = username;
                    this.requestedLanguages = requestedLanguages;
                    this.offeredLanguages = offeredLanguages;
                    this.locations = locations;
                    this.authenticated = authenticated;
                    this.picUrl = picUrl;
                    this.genderCode = genderCode;
                    this.dateOfBirth = dateOfBirth;
                    this.locale = locale;
                }
                return UserModel;
            })();
            exports_1("UserModel", UserModel);
        }
    }
});
