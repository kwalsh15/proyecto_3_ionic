import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/models/recipe';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent {
  @Input() item: Recipe;
  @Output() clicked = new EventEmitter();
  @Output() comments = new EventEmitter();
}
