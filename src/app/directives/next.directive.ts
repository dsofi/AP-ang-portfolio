import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('click')
  next(){
    var elem = this.elementRef.nativeElement.parentElement.parentElement.children[0];
    var item = elem.getElementsByClassName("item");
    elem.append(item[0]);
  }

}
