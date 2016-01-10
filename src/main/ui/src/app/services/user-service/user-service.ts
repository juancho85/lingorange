import {Injectable} from 'angular2/core';
import {UserModel} from './user-model';
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

    constructor(private http: Http) {}

    getCurrentUserObs(): Observable<UserModel>{
        return this.http.get('/js/app/services/user-service/mock-user.json')
            .map((request) => request.json());
    }

}
