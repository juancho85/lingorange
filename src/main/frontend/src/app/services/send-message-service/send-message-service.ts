import {Injectable} from 'angular2/core';
import {PartnerModel} from '../partner-service/partner-model'

@Injectable()
export class SendMessageService {

    constructor() {}

    sendMessage(message:string, recipient:PartnerModel){
        console.log("send message to: "+ recipient.username);
        console.log("message: ");
        console.log(message)
    }

}
