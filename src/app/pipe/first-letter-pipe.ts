import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter',
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: string | undefined): string | undefined {
    return value?.charAt(0);
  }

}
