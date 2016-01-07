import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'welcome',
    templateUrl: 'js/app/components/welcome/welcome.html',
    styleUrls: ['js/app/components/welcome/welcome.css'],
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    pipes: []
})
export class Welcome {

    constructor() {}

}
