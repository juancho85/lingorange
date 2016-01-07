import {Injectable} from 'angular2/core';
import {UserModel} from './user-model';
import {MOCK_USER} from './mock-user';

@Injectable()
export class UserService {
    getCurrentUser() {
        return Promise.resolve(MOCK_USER);
    }
    constructor() {}
}
