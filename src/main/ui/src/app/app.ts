import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
    LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import {TandemApp} from './tandem';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
//import 'rxjs/add/operator/switchMap';

bootstrap(TandemApp, [ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    HTTP_PROVIDERS]);

