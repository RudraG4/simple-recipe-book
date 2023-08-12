import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListService } from './shopping-list.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  exports: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ShoppingListComponent,
      },
    ]),
  ],
  providers: [ShoppingListService],
})
export class ShoppingListModule {}
