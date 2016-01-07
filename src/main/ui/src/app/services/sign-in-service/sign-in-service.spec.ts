import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {SignInService} from './sign-in-service';


describe('SignInService Service', () => {

  beforeEachProviders(() => [SignInService]);


  it('should ...', inject([SignInService], (service:SignInService) => {

  }));

});
