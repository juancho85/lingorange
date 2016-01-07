import {Component} from 'angular2/core';
import {PartnerService} from '../../services/partner-service/partner-service';
import {PartnerModel} from '../../services/partner-service/partner-model';
import {PartnerFilterCriteria} from '../../services/partner-service/partner-filter-criteria'
import {ArrayJoinerPipe} from '../../pipes/array-joiner-pipe/array-joiner-pipe';
import {NgFor} from 'angular2/common';



@Component({
    selector: 'notifications',
    templateUrl: 'js/app/components/user-partners/user-partners.html',
    styleUrls: ['js/app/components/user-partners/user-partners.css'],
    providers: [PartnerService],
    directives: [NgFor],
    pipes: [ArrayJoinerPipe]
})
export class UserPartners {
    public partners:PartnerModel[];

    constructor(private _partnerService: PartnerService) {
        //TODO: take as criteria the frienship with someone
        var criteria = new PartnerFilterCriteria('English', 'English');
        this._partnerService.getPartners(criteria).then((result)=>
            {
                this.partners = result;
            }
        );
    }

    unfollow(){
        console.log("unfollow");
    }

    sendMessage(){
        console.log("send message");
    }

}
