import {Injectable} from 'angular2/core';
import {UserModel} from '../user-service/user-model'
import {NotificationModel} from '../notification-service/notification-model'
import {MOCK_NOTIFICATIONS} from './mock-notifications'

@Injectable()
export class NotificationService {

    getAllNotificationsForUser(user: UserModel):Promise<NotificationModel[]> {
        return Promise.resolve(MOCK_NOTIFICATIONS);
    }
    constructor() {}

}
