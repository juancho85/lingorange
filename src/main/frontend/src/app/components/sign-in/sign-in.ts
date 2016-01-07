import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control, Validators, NgIf} from 'angular2/common';
import {SignInModel} from '../../services/sign-in-service/sign-in-model';
import {SignInService} from '../../services/sign-in-service/sign-in-service';
import {Response} from 'angular2/http';

@Component({
    selector: 'sign-in',
    templateUrl: 'app/components/sign-in/sign-in.html',
    styleUrls: ['app/components/sign-in/sign-in.css'],
    providers: [SignInService],
    directives: [FORM_DIRECTIVES, NgIf],
    pipes: []
})
export class SignIn {
    controlUsername =  new Control('', Validators.required);
    controlPassword =  new Control('', Validators.required);

    formGroup = new ControlGroup({
        username: this.controlUsername,
        password: this.controlPassword
    });

    constructor(private _signInService: SignInService) {}

    get controlGroupValue(): string {
        return JSON.stringify(this.formGroup.value, null, 2);
    }

    onLogin(){
        if(this.formGroup.valid){
            this._signInService.authenticate(this.formGroup.value).subscribe((res: Response) => {
                var response = res.json();
                console.log('outcome sign in - response: ' + JSON.stringify(response, null, 2));
            });
        }
    }




}