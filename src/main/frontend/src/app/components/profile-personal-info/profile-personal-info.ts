import {Component, Input} from 'angular2/core';
import {NgIf} from 'angular2/common';

@Component({
  selector: 'profile-personal-info',
  templateUrl: 'app/components/profile-personal-info/profile-personal-info.html',
  styleUrls: ['app/components/profile-personal-info/profile-personal-info.css'],
  providers: [],
  directives: [NgIf],
  pipes: []
})
export class ProfilePersonalInfo {
  @Input('is-active') isActive;
  constructor() {}

}
