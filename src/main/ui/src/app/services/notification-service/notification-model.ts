import {UserModel} from '../user-service/user-model';
export class NotificationModel {

    constructor(public id:number,
                public title:string,
                public sender:UserModel,
                public body:string){
    }
}