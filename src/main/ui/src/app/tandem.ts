import {Component} from 'angular2/core';
import {Navigation} from './components/navigation/navigation';
import {Map} from './components/map/map';
import {SignUp} from './components/sign-up/sign-up';
import {SignIn} from './components/sign-in/sign-in';
import {UserPartners} from './components/user-partners/user-partners';
import {Welcome} from './components/welcome/welcome';
import {Notifications} from './components/notifications/notifications';
import {Profile} from './components/profile/profile';
import {SearchPartner} from './components/search-partner/search-partner';
import {ROUTER_DIRECTIVES, RouteConfig, Route, Router} from 'angular2/router';

@Component({
  selector: 'tandem-app',
  providers: [],
  templateUrl: 'js/app/tandem.html',
  directives: [Navigation, Map, ROUTER_DIRECTIVES],
  pipes: []
})

@RouteConfig([
    new Route({path:'/', name: 'SearchPartner', component: SearchPartner}),
    new Route({path:'/welcome', name: 'Welcome', component: Welcome}),
    new Route({path:'/sign-in', name: 'SignIn', component: SignIn}),
    new Route({path:'/partners', name: 'UserPartners', component: UserPartners}),
    new Route({path:'/profile/:tab', name: 'Profile', component: Profile}),
    new Route({path:'/notifications', name: 'Notifications', component: Notifications}),
    new Route({path:'/sign-up', name: 'SignUp', component: SignUp})
])

export class TandemApp {
    router: Router;
    constructor(router: Router){
        this.router = router;
    }

}
