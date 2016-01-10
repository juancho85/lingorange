System.register(['angular2/core', '../../services/notification-service/notification-service', '../../services/user-service/user-model', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, notification_service_1, user_model_1, common_1;
    var Notifications;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (notification_service_1_1) {
                notification_service_1 = notification_service_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Notifications = (function () {
                function Notifications(notificationService) {
                    this.notificationService = notificationService;
                    this.notifications = this.notificationService.getAllNotificationsForUser(new user_model_1.UserModel());
                }
                Notifications.prototype.eraseMessage = function (messageId) {
                    console.log("deleting message...");
                };
                Notifications.prototype.sendMessage = function (recipient, messageId) {
                    console.log("answer to :" + recipient);
                    console.log("to message id:" + messageId);
                };
                Notifications = __decorate([
                    core_1.Component({
                        selector: 'notifications',
                        templateUrl: 'js/app/components/notifications/notifications.html',
                        styleUrls: ['js/app/components/notifications/notifications.css'],
                        providers: [notification_service_1.NotificationService],
                        directives: [common_1.NgFor],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [notification_service_1.NotificationService])
                ], Notifications);
                return Notifications;
            })();
            exports_1("Notifications", Notifications);
        }
    }
});
