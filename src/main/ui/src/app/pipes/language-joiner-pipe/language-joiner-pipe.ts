import {Pipe} from 'angular2/core';
import {Language} from "../../services/laguage-service/Language";

@Pipe({
  name: 'LanguageJoinerPipe'
})
export class LanguageJoinerPipe {

  transform(language: Language[], args?) {
    return language.map(res=> res.name).join(", ");
  }

}
