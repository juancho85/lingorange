import {Injectable} from 'angular2/core';
import {PartnerFilterCriteria} from './partner-filter-criteria'
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import {UserModel} from "../user-service/user-model";


@Injectable()
export class PartnerService {

    getPartners(criteria:PartnerFilterCriteria):Observable<UserModel[]> {
        if(criteria.partnerOfferedLanguageIso === 'fr'){
            return this.http.get('/js/app/services/partner-service/mock-partners-offer-french.json')
                .map((request) => request.json());
        }else if (criteria.partnerOfferedLanguageIso === 'de'){
            return this.http.get('/js/app/services/partner-service/mock-partners-offer-german.json')
                .map((request) => request.json());
        }else if (criteria.partnerOfferedLanguageIso === 'en'){
            return this.http.get('/js/app/services/partner-service/mock-partners-offer-english.json')
                .map((request) => request.json());
        }else{
            return this.http.get('/js/app/services/partner-service/empty.json')
                .map((request) => request.json());
        }
    }

    constructor(private http: Http) {}

}
