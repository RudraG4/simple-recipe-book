import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[dropDown]' })
export class DropdownDirective {
  isShow = false;
  // @HostListener('click') toggleShow() {
  //   this.isShow = !this.isShow;
  //   const dropDownToggle =
  //     this.elementRef.nativeElement.querySelector('.dropdown-toggle');
  //   const dropDownMenu =
  //     this.elementRef.nativeElement.querySelector('.dropdown-menu');
  //   if (this.isShow) {
  //     this.renderer.addClass(dropDownToggle, 'show');
  //     this.renderer.addClass(dropDownMenu, 'show');
  //   } else {
  //     this.renderer.removeClass(dropDownToggle, 'show');
  //     this.renderer.removeClass(dropDownMenu, 'show');
  //   }
  // }

  @HostListener('document:click', ['$event']) closeMenu(event: Event) {
    this.isShow = this.elementRef.nativeElement.contains(event.target)
      ? !this.isShow
      : false;
    const dropDownToggle =
      this.elementRef.nativeElement.querySelector('.dropdown-toggle');
    const dropDownMenu =
      this.elementRef.nativeElement.querySelector('.dropdown-menu');
    if (this.isShow) {
      this.renderer.addClass(dropDownToggle, 'show');
      this.renderer.addClass(dropDownMenu, 'show');
    } else {
      this.renderer.removeClass(dropDownToggle, 'show');
      this.renderer.removeClass(dropDownMenu, 'show');
    }
  }

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {}
}
