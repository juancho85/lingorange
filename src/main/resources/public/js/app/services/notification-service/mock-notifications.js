System.register(['./notification-model', '../user-service/user-model'], function(exports_1) {
    var notification_model_1, user_model_1;
    var MOCK_NOTIFICATIONS;
    return {
        setters:[
            function (notification_model_1_1) {
                notification_model_1 = notification_model_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            }],
        execute: function() {
            exports_1("MOCK_NOTIFICATIONS", MOCK_NOTIFICATIONS = [
                new notification_model_1.NotificationModel(1, "Hablamos alemán?", new user_model_1.UserModel("Germanie", ["Spanish"], ["German"]), "Halo, hablamos alem\u00E1n? Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."),
                new notification_model_1.NotificationModel(2, "Hablamos francés?", new user_model_1.UserModel("Frenchie", ["Spanish"], ["French"]), "Salut, hablamos franc\u00E9s? Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."),
                new notification_model_1.NotificationModel(3, "Hablamos italiano?", new user_model_1.UserModel("Italiani", ["Spanish"], ["Italian"]), "Ciao, hablamos italiano? Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.")
            ]);
        }
    }
});
