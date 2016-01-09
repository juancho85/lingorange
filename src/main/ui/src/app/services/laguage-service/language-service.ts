import {Language} from './Language';
import {FULL_LANGUAGES_LIST} from './en-language-codes';
import {Injectable} from 'angular2/core';

@Injectable()
export class LanguageService {

    constructor() {}

    getFullLanguageListForIsoCode(isoCode: string): Language[]{
        return FULL_LANGUAGES_LIST;
    }

}
