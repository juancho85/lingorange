import {Component, ElementRef, Renderer} from 'angular2/core';
import {UserService} from '../../services/user-service/user-service';
import {PartnerFilter} from '../partner-filter/partner-filter';
import {PartnerFilterCriteria} from '../partner-filter/partner-filter-criteria';
import {InfoWindow} from '../info-window/info-window';
import {UserModel} from '../../services/user-service/user-model';
import {PartnerService} from '../../services/partner-service/partner-service';
import {MAP_DEFAULT_OPTIONS} from './map-default-options';
import {Marker} from './Marker';
import {Observable} from "rxjs/Observable";

declare var google:any;

@Component({
    selector: 'map',
    templateUrl: 'js/app/components/map/map.html',
    styleUrls: ['js/app/components/map/map.css'],
    providers: [UserService, PartnerService],
    directives: [PartnerFilter, InfoWindow],
    pipes: []
})

export class Map {
    gMap:any;
    selectedPartner: UserModel;
    partnerResults: UserModel[] = [];
    markers: Marker[] = [];

    constructor(element: ElementRef,
                renderer: Renderer,
                private _userService: UserService,
                private _partnerService: PartnerService) {
        renderer.setElementClass(element, 'map-canvas', true);
        const container = element.nativeElement.querySelector('.map-inner');
        this.gMap = new google.maps.Map(container, MAP_DEFAULT_OPTIONS);
    }

    launchFilteredSearch(criteria:PartnerFilterCriteria){
        this.removeMarkers();
        this._partnerService.getPartners(criteria).subscribe((res)=>{
            res.forEach((partner)=>{
                var gMarker = {
                    map: this.gMap,
                    //use only default location
                    lat: partner.locations[0].lat,
                    lng: partner.locations[0].lng,
                    label: partner.username,
                    partner: partner
                }
                this.addMarker(gMarker, partner);
                this.partnerResults = res;
            })
        });
    }

    showPartner(partner: UserModel){
        this.selectedPartner = partner;
    }

    resetSelectedPartner(){
        this.selectedPartner = null;
    }

    removeMarkers(){
        this.markers.forEach((marker)=>marker.setMap(null));
    }

    addMarker(opts: Marker, partner: UserModel){
        opts.position = {
            lat: opts.lat,
            lng: opts.lng
        };
        var gMarker = new google.maps.Marker(opts);
        this._on({
            obj: gMarker,
            eventName: 'click',
            callback: function(){
                this.showPartner(partner);
            }
        });
        this.markers.push(gMarker);
    }

    _on(opts:OnEvent) {
        var self = this;
        google.maps.event.addListener(opts.obj, opts.eventName, function(e){
            opts.callback.call(self, e, opts.obj);
        });
    }
}

interface OnEvent {
    obj: any;
    eventName: string;
    callback: any;
}
