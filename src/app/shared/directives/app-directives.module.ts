import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

const directives = [DropdownDirective];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
})
export class AppDirectives {}
