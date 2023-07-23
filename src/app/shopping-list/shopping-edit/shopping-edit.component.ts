import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @Output() ingredientAdded: EventEmitter<Ingredient> =
    new EventEmitter<Ingredient>();
  @ViewChild('itemName', { static: true }) itemNameRef!: ElementRef;
  @ViewChild('itemAmount', { static: true }) itemAmountRef!: ElementRef;

  onIngredientAdd(event: Event) {
    event.preventDefault();
    const name = this.itemNameRef.nativeElement.value;
    const amount = this.itemAmountRef.nativeElement.value;
    if (!name || !amount) {
      return;
    }
    this.ingredientAdded.emit(new Ingredient(name, Number(amount)));
    this.onClear();
  }

  onDelete() {}

  onClear() {
    this.itemNameRef.nativeElement.value = '';
    this.itemAmountRef.nativeElement.value = '';
  }
}
