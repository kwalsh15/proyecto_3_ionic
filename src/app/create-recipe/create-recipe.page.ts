import { Component, ComponentFactoryResolver, ComponentRef, Injector, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { IonReorder } from '@ionic/angular';
import { Recipe } from 'src/models/recipe';
import { RecipesService } from '../services/recipes.service';
import { StepFormComponent } from '../step-form/step-form.component';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.page.html',
  styleUrls: ['./create-recipe.page.scss'],
})
export class CreateRecipePage implements OnInit {
  steps: number = 1;

  recipe: Recipe = new Recipe('', '', '', [], '');

  StepFormComponents: StepFormComponent[] = [];

  @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private recipeService: RecipesService) { 
  }

  ngOnInit() {
  }

  addNewComponent() {
    let factory = this.resolver.resolveComponentFactory(StepFormComponent);

    const component: ComponentRef<StepFormComponent> = this.target.createComponent(factory);
    const stepForm = component.instance;

    stepForm.stepNum = this.steps;

    this.StepFormComponents.push(component.instance);

    this.steps = this.steps + 1;
  }

  reorderItems(ev) {
    ev.detail.complete();
  }

  saveRecipe() {
    this.StepFormComponents.forEach(component => {
      this.recipe.steps.push(component.newStep);
    });
    this.recipeService.save(this.recipe);
  }

}
