import {Component} from 'angular2/core';
import {NotificationService} from '../../services/notification-service/notification-service';
import {NotificationModel} from '../../services/notification-service/notification-model';
import {UserModel} from '../../services/user-service/user-model';
import {NgFor} from 'angular2/common';
import {Observable} from 'rxjs/Observable';



@Component({
    selector: 'notifications',
    templateUrl: 'js/app/components/notifications/notifications.html',
    styleUrls: ['js/app/components/notifications/notifications.css'],
    providers: [NotificationService],
    directives: [NgFor],
    pipes: []
})
export class Notifications {
    public notifications: Observable<NotificationModel[]>;

    constructor(private notificationService: NotificationService) {
        this.notifications = this.notificationService.getAllNotificationsForUser(new UserModel());
    }

    eraseMessage(messageId: number){
        //TODO: implement
        console.log("deleting message...");
    }

    sendMessage(recipient: UserModel, messageId: number){
        //TODO: implement
        console.log("answer to :" + recipient);
        console.log("to message id:" + messageId);
    }

}
