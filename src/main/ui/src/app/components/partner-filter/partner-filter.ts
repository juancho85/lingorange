import {Component, Output, EventEmitter} from 'angular2/core';
import {UserService} from '../../services/user-service/user-service';
import {UserModel} from '../../services/user-service/user-model';
import {PartnerFilterCriteria} from './partner-filter-criteria';

declare var jQuery:any;

@Component({
    selector: 'partner-filter',
    templateUrl: 'js/app/components/partner-filter/partner-filter.html',
    styleUrls: ['js/app/components/partner-filter/partner-filter.css'],
    providers: [UserService],
    directives: [],
    pipes: [],
    events: ['filterPartners']
})

export class PartnerFilter {
    public userRequestedLanguages:string[];
    public userOfferedLanguages:string[];
    public partnerFilterCriteria:PartnerFilterCriteria = new PartnerFilterCriteria("Requested Language","Offered Language");
    @Output() filterPartners: EventEmitter<PartnerFilterCriteria> = new EventEmitter();

    constructor(private _userService:UserService) {
        this._userService.getCurrentUser().then((result)=>
            {
                this.userRequestedLanguages = result.requestedLanguages;
                this.userOfferedLanguages = result.offeredLanguages;
            }
        );
    }

    getUserRequestedLanguages():string[] {
        return this.userRequestedLanguages;
    }

    getUserOfferedLanguages():string[] {
        return this.userOfferedLanguages;
    }

    selectRequestedLanguage(language:string) {
        this.partnerFilterCriteria.partnerOfferedLanguage = language;
    }

    selectOfferedLanguage(language:string) {
        this.partnerFilterCriteria.partnerRequestedLanguage = language;
    }

    searchPartners(element) {
        //TODO: avoid interacting directly with the DOM
        jQuery(element).modal('hide');
        this.filterPartners.emit(this.partnerFilterCriteria);
    }
}
