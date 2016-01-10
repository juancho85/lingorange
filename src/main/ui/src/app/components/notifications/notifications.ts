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
        //TODO: replace with connected user
        var userModel = {
            "id": 1,
            "username": "juancho",
            "picUrl": "your.url.goes.here",
            "authenticated": true,
            "genderCode": "M",
            "dateOfBirth": "1985-06-26T18:25:43.511Z",
            "locale": "en",
            "requestedLanguages": [
                {"iso": "fr", "name": "French", "level": "C1"},
                {"iso": "en", "name": "English", "level": "B2"},
                {"iso": "de", "name": "German", "level": "A2"},
                {"iso": "it", "name": "Italian", "level": "A1"}
            ],
            "offeredLanguages": [
                {"iso": "es", "level": "C2"}
            ],
            "locations": [
                {"name": "Home", "lat": 40.440296, "lng": -3.709746},
                {"name": "work", "lat": 40.440320, "lng": -3.629357}
            ],
            "friendIds": [2, 3, 4]
        };

        this.notifications = this.notificationService.getAllNotificationsForUser(userModel);
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
