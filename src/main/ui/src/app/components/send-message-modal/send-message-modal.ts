import {Component, Input} from 'angular2/core';
import {PartnerModel} from '../../services/partner-service/partner-model'
import {SendMessageService} from '../../services/send-message-service/send-message-service'


@Component({
    selector: 'send-message-modal',
    templateUrl: 'js/app/components/send-message-modal/send-message-modal.html',
    styleUrls: ['js/app/components/send-message-modal/send-message-modal.css'],
    providers: [SendMessageService],
    directives: [],
    pipes: []
})
export class SendMessageModal {
    @Input('selected-partner') partner:PartnerModel;
    constructor(private _sendMessageService:SendMessageService) {}

    sendMessage(message:any){
        this._sendMessageService.sendMessage(message.value, this.partner);
    }

}
