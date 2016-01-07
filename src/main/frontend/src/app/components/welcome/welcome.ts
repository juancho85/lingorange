import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'welcome',
    templateUrl: 'app/components/welcome/welcome.html',
    styleUrls: ['app/components/welcome/welcome.css'],
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    pipes: []
})
export class Welcome {

    constructor() {}

}
