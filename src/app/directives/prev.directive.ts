import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('click')
  prev(){
    var elem = this.elementRef.nativeElement.parentElement.parentElement.children[0];
    var item = elem.getElementsByClassName("item");
    elem.prepend(item[item.length - 1]);
  }

}
