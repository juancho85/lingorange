import {Injectable} from 'angular2/core';
import {UserModel} from '../user-service/user-model'
import {NotificationModel} from '../notification-service/notification-model'

@Injectable()
export class PartnerService {

    getAllNotificationsForUser(user: UserModel):Promise<NotificationModel[]> {
        return Promise.resolve(MOCK_PARTNERS_OFFER_ITALIAN);

    }
    constructor() {}

}
