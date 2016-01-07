import {Injectable} from 'angular2/core';
import {SignInModel} from './sign-in-model';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SignInService {

    constructor(public _http: Http) {}

    authenticate(user: SignInModel): Observable<Response>{
        var headers = new Headers({
            authorization: 'Basic '  + btoa(user.username + ':' + user.password),
            'X-Requested-With': 'XMLHttpRequest;charset=UTF-8',
            'Content-type': 'application/json'
        });

        var headers = new Headers();

        return this._http.post('/api/authenticate',
            JSON.stringify(user),
            {headers: headers});
    }

}
