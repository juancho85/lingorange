import {Component, Output, EventEmitter} from 'angular2/core';
import {UserService} from '../../services/user-service/user-service';
import {UserModel} from '../../services/user-service/user-model';
import {PartnerFilterCriteria} from './partner-filter-criteria';
import {Language} from "../../services/laguage-service/Language";
import {FORM_DIRECTIVES, Validators, Control, ControlGroup} from "angular2/common";

declare var jQuery:any;

@Component({
    selector: 'partner-filter',
    templateUrl: 'js/app/components/partner-filter/partner-filter.html',
    styleUrls: ['js/app/components/partner-filter/partner-filter.css'],
    providers: [UserService],
    directives: [FORM_DIRECTIVES],
    pipes: [],
    events: ['filterPartners']
})

export class PartnerFilter {
    controlRequestedLanguage =  new Control('', Validators.required);
    controlOfferedLanguage =  new Control('', Validators.required);

    formGroup = new ControlGroup({
        requestedLanguage: this.controlRequestedLanguage,
        offeredLanguage: this.controlOfferedLanguage
    });

    get controlGroupValue(): string {
        return JSON.stringify(this.formGroup.value, null, 2);
    }

    public userRequestedLanguages:Language[];
    public userOfferedLanguages:Language[];
    public partnerFilterCriteria:PartnerFilterCriteria;
    @Output() filterPartners: EventEmitter<PartnerFilterCriteria> = new EventEmitter();

    constructor(private _userService:UserService) {
        this._userService.getCurrentUserObs()
            .subscribe(res => {
                this.userRequestedLanguages = res.requestedLanguages;
                this.userOfferedLanguages = res.offeredLanguages;
            });
    }

    searchPartners(element) {
        //TODO: avoid interacting directly with the DOM
        jQuery(element).modal('hide');

        if(this.formGroup.valid){
            this.partnerFilterCriteria = new PartnerFilterCriteria(this.controlRequestedLanguage.value, this.controlOfferedLanguage.value);
            this.filterPartners.emit(this.partnerFilterCriteria);
        }
    }

}
