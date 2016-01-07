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
import {ArrayJoinerPipe} from './array-joiner-pipe';


describe('ArrayJoinerPipe Pipe', () => {

  beforeEachProviders(() => [ArrayJoinerPipe]);

  it('should transform the input', inject([ArrayJoinerPipe], (pipe:ArrayJoinerPipe) => {
      expect(pipe.transform(["un", "dos"])).toBe("un, dos");
  }));

});
