import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class.app-root')
  appRoot = true;

  title = 'simple-recipe-app';
  currentMenu = 'recipes';
}
