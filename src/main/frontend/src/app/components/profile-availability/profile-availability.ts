import {Component, Input} from 'angular2/core';
import {NgIf} from 'angular2/common';

@Component({
  selector: 'profile-availability',
  templateUrl: 'app/components/profile-availability/profile-availability.html',
  styleUrls: ['app/components/profile-availability/profile-availability.css'],
  providers: [],
  directives: [NgIf],
  pipes: []
})
export class ProfileAvailability {
  @Input('is-active') isActive;
  constructor() {}

}
