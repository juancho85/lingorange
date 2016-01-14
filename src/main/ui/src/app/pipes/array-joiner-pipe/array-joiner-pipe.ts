import {Pipe} from 'angular2/core';

@Pipe({
  name: 'ArrayJoinerPipe'
})
export class ArrayJoinerPipe {

  transform(value:any[], args?) {
    return value.join(", ");
  }

}
