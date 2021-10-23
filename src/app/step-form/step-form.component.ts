import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Step } from 'src/models/steps';
import { ToastController } from '@ionic/angular';

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
    videoUrl: '',
    name: ''
  };
  

  newIngredient: string;
  newCookware: string;

  @Output()
  componentDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor(private toastController: ToastController) { }

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

  remove() {
    window.dispatchEvent(new CustomEvent('componentDeleted',  {"detail": { "stepNum": this.stepNum - 1 }}))
  }
  updateStep(step: number) {
    this.stepNum = step;
  }

  validateStep() {
    const isValidIngredients = this.newStep.ingredients.length > 0;
    const isValidCookware = this.newStep.cookware.length > 0;
    const isValidVideUrl = this.newStep.videoUrl != '';
    const isValidName = this.newStep.name != '';

    if(!isValidIngredients) {
      this.showToast(`Debe ingresar al menos un ingrediente en el paso ${this.stepNum}`);
      return false;
    } else if(!isValidCookware) {
      this.showToast(`Debe ingresar al menos un utensilio en el paso ${this.stepNum}`);
      return false;
    } else if(!isValidVideUrl) {
      this.showToast(`Debe ingresar el video del paso en el paso ${this.stepNum}`);
      return false;
    } else if(!isValidName) {
      this.showToast(`Debe ingresar al nombre del paso en el paso ${this.stepNum}`);
      return false;
    }

    return true;
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'danger'
    });
    await toast.present();
  }
}
