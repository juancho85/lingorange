import {Injectable} from 'angular2/core';
import {UserModel} from '../user-service/user-model';
import {NotificationModel} from '../notification-service/notification-model';
import {MOCK_NOTIFICATIONS} from './mock-notifications';
import {Http} from "angular2/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class NotificationService {

    constructor(private http: Http) {}

    getAllNotificationsForUser(user: UserModel){
        return this.http.get('/js/app/components/notifications/mock-notification.json')
            .map((request) => request.json());
    }

}
