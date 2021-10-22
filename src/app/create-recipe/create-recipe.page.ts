import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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

  @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target: ViewContainerRef;

  componentsReferences = Array<ComponentRef<StepFormComponent>>()

  constructor(private resolver: ComponentFactoryResolver,
              private recipeService: RecipesService,
              private router: Router,
              private toastController: ToastController) { 
  }

  @Input()
  count: number = 0;


  ngOnInit() {
    window.addEventListener('componentDeleted', (e) => {
      const key = e['detail'].stepNum;
      const nodes = document.getElementById('container').childNodes;
      nodes.forEach(element => {
        const isStepToDelete: boolean = element.childNodes[0]?.firstChild?.textContent.includes(String(key));
        if(isStepToDelete) {
          this.recipeService.stepComponents[key].updateStep(-1);
          element.remove();
          let step = 1;
          for (let index = 0; index < this.recipeService.stepComponents.length; index++) {
            if(this.recipeService.stepComponents[index].stepNum >= 0) {
              console.log(step, 'wtf');
              this.recipeService.stepComponents[index]?.updateStep(step);
              step++;
            }
          }
        }
      });
      this.steps = 1;
    });
  }

  ionViewDidEnter() {
    this.recipe = new Recipe('', '', '', [], '');
    this.target.clear();
    this.steps = 1;
  }

  addNewComponent() {
    let factory = this.resolver.resolveComponentFactory(StepFormComponent);

    const component: ComponentRef<StepFormComponent> = this.target.createComponent(factory);
    const stepForm = component.instance;

    stepForm.stepNum = this.steps;

    this.recipeService.stepComponents.push(component.instance);

    this.steps = this.steps + 1;
  }

  reorderItems(ev) {
    ev.detail.complete();
  }

  async saveRecipe() {
    this.recipeService.stepComponents.forEach(component => {
      if(component.stepNum >= 1) {
      this.recipe.steps.push(component.newStep);
      }
    });
    this.recipeService.save(this.recipe);
    const toast = await this.toastController.create({
      message: "Receta creada existosamente",
      duration: 2000,
      color: 'success'
    });
    await toast.present();
    this.router.navigate(['/home/listing']);
  }

}

