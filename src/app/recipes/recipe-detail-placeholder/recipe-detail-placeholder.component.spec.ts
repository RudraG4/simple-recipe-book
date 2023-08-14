import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailPlaceholderComponent } from './recipe-detail-placeholder.component';

describe('RecipeDetailPlaceholderComponent', () => {
  let component: RecipeDetailPlaceholderComponent;
  let fixture: ComponentFixture<RecipeDetailPlaceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailPlaceholderComponent]
    });
    fixture = TestBed.createComponent(RecipeDetailPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
