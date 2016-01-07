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
import {SendMessageService} from './send-message-service';


describe('SendMessageService Service', () => {

  beforeEachProviders(() => [SendMessageService]);


  it('should ...', inject([SendMessageService], (service:SendMessageService) => {

  }));

});
