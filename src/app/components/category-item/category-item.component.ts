import { Component, Input } from '@angular/core';
import { Recipe } from 'src/models/recipe';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent {
  @Input() item: Recipe;
}
