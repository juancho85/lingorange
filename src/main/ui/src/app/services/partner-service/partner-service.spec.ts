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
import {PartnerService} from './partner-service';


describe('PartnerService Service', () => {

  beforeEachProviders(() => [PartnerService]);


  it('should ...', inject([PartnerService], (service:PartnerService) => {

  }));

});
