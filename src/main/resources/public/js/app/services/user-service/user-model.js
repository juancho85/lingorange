System.register([], function(exports_1) {
    var UserModel;
    return {
        setters:[],
        execute: function() {
            UserModel = (function () {
                function UserModel(id, username, authenticated, requestedLanguages, offeredLanguages, picUrl, genderCode, dateOfBirth, locale, locations) {
                    this.id = id;
                    this.username = username;
                    this.authenticated = authenticated;
                    this.requestedLanguages = requestedLanguages;
                    this.offeredLanguages = offeredLanguages;
                    this.picUrl = picUrl;
                    this.genderCode = genderCode;
                    this.dateOfBirth = dateOfBirth;
                    this.locale = locale;
                    this.locations = locations;
                }
                return UserModel;
            })();
            exports_1("UserModel", UserModel);
        }
    }
});
