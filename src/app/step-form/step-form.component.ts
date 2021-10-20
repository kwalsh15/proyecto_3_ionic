import { Component, OnInit } from '@angular/core';
import { Step } from 'src/models/steps';

@Component({
  selector: 'ion-reorder[app-step-form]',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss'],
})
export class StepFormComponent implements OnInit {
  stepNum: number = 1;
  newStep: Step = {
    ingredients: [],
    cookware: [],
    videoUrl: ''
  };
  

  newIngredient: string;
  newCookware: string;

  constructor() { }

  ngOnInit() {}

  addIngredient() {
    this.newStep.ingredients.push(this.newIngredient);
  }

  removeIngredient(ingredient) {
    const index = this.newStep.ingredients.indexOf(ingredient);
    this.newStep.ingredients.splice(index, 1);
  }

  addCookware() {
    this.newStep.cookware.push(this.newCookware);
  }

  removeCookware(ingredient) {
    const index = this.newStep.cookware.indexOf(ingredient);
    this.newStep.cookware.splice(index, 1);
  }

}
