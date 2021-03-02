import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.elem.nativeElement.style.backgroundColor = 'pink';
    this.elem.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.elem.nativeElement.style.backgroundColor = 'transparent';
    this.elem.nativeElement.style.color = 'Black';
  }

  gnOninit() {
    this.elem.nativeElement.style.backgroundColor = 'rgb(219, 123, 195)';
    this.elem.nativeElement.style.color = 'white';
  }


}
