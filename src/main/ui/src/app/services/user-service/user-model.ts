import {Language} from "../laguage-service/Language";
import {LocationModel} from "../location-service/LocationModel";
export class UserModel {
    constructor(public id: number,
                public username: string,
                public authenticated: boolean,
                public requestedLanguages: Language[],
                public offeredLanguages: Language[],
                public picUrl?: string,
                public genderCode?: string,
                public dateOfBirth?: any,
                public locale?: string,
                public locations?: LocationModel[]
                ){}
}
