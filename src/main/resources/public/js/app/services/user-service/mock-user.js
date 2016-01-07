System.register(['./user-model'], function(exports_1) {
    var user_model_1;
    var MOCK_USER;
    return {
        setters:[
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            }],
        execute: function() {
            exports_1("MOCK_USER", MOCK_USER = new user_model_1.UserModel("juancho", ["French", "English", "German", "Italian"], ["Spanish"]));
        }
    }
});
