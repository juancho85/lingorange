import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {TandemApp} from '../../tandem';
import {SignUp} from '../sign-up/sign-up';

@Component({
  selector: 'navigation',
  templateUrl: 'js/app/components/navigation/navigation.html',
  styleUrls: ['js/app/components/navigation/navigation.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

export class Navigation {

  constructor() {}

}
