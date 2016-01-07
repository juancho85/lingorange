System.register([], function(exports_1) {
    var NotificationModel;
    return {
        setters:[],
        execute: function() {
            NotificationModel = (function () {
                function NotificationModel(id, title, sender, body) {
                    this.id = id;
                    this.title = title;
                    this.sender = sender;
                    this.body = body;
                }
                return NotificationModel;
            })();
            exports_1("NotificationModel", NotificationModel);
        }
    }
});
