import {Injectable} from 'angular2/core';
import {SignUpModel} from './sign-up-model';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SignUpService {

    constructor(public _http: Http) {}

    createUser(user: SignUpModel): Observable<Response>{
        //var headers = new Headers({
        //    authorization: 'Basic '  + btoa(user.username + ':' + user.password),
        //    'X-Requested-With': 'XMLHttpRequest;charset=UTF-8',
        //    'Content-type': 'application/json'
        //});

        var headers = new Headers();

        return this._http.put('/api/user',
            JSON.stringify(user),
            {headers: headers});
    }

}
