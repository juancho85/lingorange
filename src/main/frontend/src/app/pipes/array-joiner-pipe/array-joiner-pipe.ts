import {Pipe} from 'angular2/core';

@Pipe({
  name: 'ArrayJoinerPipe'
})
export class ArrayJoinerPipe {

  transform(value:string[], args?) {
    return value.join(", ");
  }

}
