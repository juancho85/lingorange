import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {SendMessageModal} from '../send-message-modal/send-message-modal';
import {LanguageJoinerPipe} from "../../pipes/language-joiner-pipe/language-joiner-pipe";


@Component({
    selector: 'info-window',
    templateUrl: 'js/app/components/info-window/info-window.html',
    styleUrls: ['js/app/components/info-window/info-window.css'],
    providers: [],
    directives: [NgIf, SendMessageModal],
    pipes: [LanguageJoinerPipe],
    events: ['closePartnerDetailsEv']
})

export class InfoWindow {
    @Input('selected-partner') partner;
    @Output() closePartnerDetailsEv: EventEmitter<any> = new EventEmitter();
    //take input partner from parent component on clicked marker
    constructor() {}

    closePartnerDetails(){
        this.closePartnerDetailsEv.emit(null);
    }

}
