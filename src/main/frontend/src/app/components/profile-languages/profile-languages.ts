import {Component, Input} from 'angular2/core';
import {NgIf} from 'angular2/common';

@Component({
  selector: 'profile-languages',
  templateUrl: 'app/components/profile-languages/profile-languages.html',
  styleUrls: ['app/components/profile-languages/profile-languages.css'],
  providers: [],
  directives: [NgIf],
  pipes: []
})
export class ProfileLanguages {
  @Input('is-active') isActive;
  constructor() {}

}
