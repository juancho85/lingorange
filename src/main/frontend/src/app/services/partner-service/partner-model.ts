export class PartnerModel {

    constructor(public username:string = " ",
                public requestedLanguages:string[] = [],
                public offeredLanguages:string[] = [],
                public lat:number = 0,
                public lng:number = 0){
    }
}