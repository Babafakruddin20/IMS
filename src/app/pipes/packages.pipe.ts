import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'packages'
})
export class PackagesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Rs. "+value+ "LPA" ;
  }

}
