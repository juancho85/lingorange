import {Component, Input} from 'angular2/core';
import {NgIf} from 'angular2/common';

@Component({
    selector: 'profile-locations',
    templateUrl: 'app/components/profile-locations/profile-locations.html',
    styleUrls: ['app/components/profile-locations/profile-locations.css'],
    providers: [],
    directives: [NgIf],
    pipes: []
})
export class ProfileLocations {
    @Input('is-active') isActive;
    constructor() {}

}
