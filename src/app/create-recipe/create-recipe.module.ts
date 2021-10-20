import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRecipePageRoutingModule } from './create-recipe-routing.module';

import { CreateRecipePage } from './create-recipe.page';
import { StepFormComponent } from '../step-form/step-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateRecipePageRoutingModule
  ],
  declarations: [CreateRecipePage, StepFormComponent]
})
export class CreateRecipePageModule {}
