import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';

@Component({
    selector: 'sign-up',
    templateUrl: 'app/components/sign-up/sign-up.html',
    styleUrls: ['app/components/sign-up/sign-up.css'],
    providers: [],
    directives: [FORM_DIRECTIVES],
    pipes: []
})
export class SignUp {
    form = new ControlGroup({
        title: new Control(),
        action: new Control()
    });

    //get selectedFields(){
    //
    //}

    constructor() {
        console.log(this.form);
    }

}
