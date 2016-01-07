export class UserModel {
    constructor(public username:string = " ",
                public requestedLanguages:string[] = [],
                public offeredLanguages:string[] = []){
    }
}
