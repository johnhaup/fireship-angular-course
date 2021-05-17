import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnifier]',
})
export class MagnifierDirective {
  @HostBinding('width') width = 400;

  @HostListener('mouseenter', ['$event'])
  onHover(): void {
    this.width = 600;
  }
}
