import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FoodCardComponent } from './food-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FoodCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [FoodCardComponent],
})
export class FoodCardModule {}
