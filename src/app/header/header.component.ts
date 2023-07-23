import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() menuSelected: EventEmitter<string> = new EventEmitter<string>();
  public isNavOpen = true;

  onNavBtnClick() {
    this.isNavOpen = !this.isNavOpen;
  }

  onSelect(menu: string) {
    this.menuSelected.emit(menu);
  }
}
