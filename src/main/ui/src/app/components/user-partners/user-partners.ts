import {Component} from 'angular2/core';
import {PartnerService} from '../../services/partner-service/partner-service';
import {PartnerFilterCriteria} from '../../services/partner-service/partner-filter-criteria'
import {ArrayJoinerPipe} from '../../pipes/array-joiner-pipe/array-joiner-pipe';
import {NgFor} from 'angular2/common';
import {UserModel} from "../../services/user-service/user-model";
import {Observable} from "rxjs/Observable";
import {LanguageJoinerPipe} from "../../pipes/language-joiner-pipe/language-joiner-pipe";



@Component({
    selector: 'notifications',
    templateUrl: 'js/app/components/user-partners/user-partners.html',
    styleUrls: ['js/app/components/user-partners/user-partners.css'],
    providers: [PartnerService],
    directives: [NgFor],
    pipes: [LanguageJoinerPipe]
})
export class UserPartners {
    public partners:Observable<UserModel[]>;

    constructor(private _partnerService: PartnerService) {
        //TODO: take as criteria the friendship with someone
        var criteria = new PartnerFilterCriteria('en', 'es');
        this.partners = this._partnerService.getPartners(criteria);
        this.partners.subscribe((res)=>console.log(res));
        console.log(this.partners);
    }

    unfollow(){
        console.log("unfollow");
    }

    sendMessage(){
        console.log("send message");
    }

}
