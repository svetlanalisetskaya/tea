import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teaDescription'
})
export class TeaDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 95) {
      return value.split('', 190).join('').padEnd(193, '.');
    } else {
      return value;
    }
  }
}
