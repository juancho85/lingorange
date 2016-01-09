import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control, Validators, NgIf} from 'angular2/common';
import {SignUpModel} from '../../services/sign-up-service/sign-up-model';
import {SignUpService} from '../../services/sign-up-service/sign-up-service';
import {Response} from 'angular2/http';

@Component({
    selector: 'sign-up',
    templateUrl: 'js/app/components/sign-up/sign-up.html',
    styleUrls: ['js/app/components/sign-up/sign-up.css'],
    providers: [SignUpService],
    directives: [FORM_DIRECTIVES],
    pipes: []
})

export class SignUp {
    controlUsername =  new Control('', Validators.required);
    controlPassword =  new Control('', Validators.required);
    controlPasswordConfirmation =  new Control('', Validators.required);
    controlRequestedLanguages =  new Control('', Validators.required);
    controlOfferedLanguages =  new Control('', Validators.required);
    controlMainLocation = new Control('', Validators.required);

    formGroup = new ControlGroup({
        username: this.controlUsername,
        password: this.controlPassword,
        passwordConfirmation: this.controlPasswordConfirmation,
        requestedLanguages: this.controlRequestedLanguages,
        offeredLanguages: this.controlOfferedLanguages,
        mainLocation: this.controlMainLocation,
    });

    constructor(private _signUpService: SignUpService) {}

    get controlGroupValue(): string {
        return JSON.stringify(this.formGroup.value, null, 2);
    }

    onLogin(){
        if(this.formGroup.valid){
            this._signUpService.createUser(this.formGroup.value).subscribe((res: Response) => {
                var response = res.json();
                console.log('outcome sign in - response: ' + JSON.stringify(response, null, 2));
                console.log('outcome sign in - response: ' + JSON.stringify(response, null, 2));
            });
        }
    }

}
