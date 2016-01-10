import {Injectable} from 'angular2/core';
import {UserModel} from '../user-service/user-model';
import {NotificationModel} from '../notification-service/notification-model';
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NotificationService {

    constructor(private http: Http) {}

    getAllNotificationsForUser(user: UserModel): Observable<NotificationModel[]>{
        return this.http.get('/js/app/services/notification-service/mock-notification.json')
            .map((request) => request.json());
    }

}
