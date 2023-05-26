import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refID'
})
export class RefIDPipe implements PipeTransform {

  transform(ref_book: number): string 
  {
    let ref:string;
    ref = "Ref - "+ ref_book;
    return ref;
  }
}
