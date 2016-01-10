import {Injectable} from 'angular2/core';
import {UserModel} from "../user-service/user-model";
import {Observable} from "rxjs/Observable";
import {LocationModel} from "./LocationModel";

@Injectable()
export class LocationService {

    constructor() {}

    getLocationsForUser(user: UserModel): Observable<LocationModel[]>{
        //TODO: implement
        return null;
    }

}
