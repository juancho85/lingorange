import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {NgFor} from 'angular2/common';
import {ProfileAvailability} from '../profile-availability/profile-availability';
import {ProfileLanguages} from '../profile-languages/profile-languages';
import {ProfileLocations} from '../profile-locations/profile-locations';
import {ProfilePersonalInfo} from '../profile-personal-info/profile-personal-info';

@Component({
    selector: 'profile',
    templateUrl: 'app/components/profile/profile.html',
    styleUrls: ['app/components/profile/profile.css'],
    providers: [],
    directives: [NgFor, ROUTER_DIRECTIVES, ProfileAvailability, ProfileLanguages, ProfileLocations, ProfilePersonalInfo],
    pipes: []
})

export class Profile {
    tabId: string;
    tabs: Tab[] = [
        {id: 'personal-info', name:'Personal Information'},
        {id: 'languages', name:'Languages'},
        {id: 'availability', name:'Availability'},
        {id: 'locations', name:'Locations'}
    ];

    constructor(params: RouteParams) {
        this.tabId = params.get('tab');
    }

    isTabActive(tabId: string){
        return tabId === this.tabId;
    }

    setSelectedTab(tabId: string){
        this.tabId = tabId;
    }
}

interface Tab {
    id: string;
    name: string;
}
