import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RecipesService } from '../services/recipes.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  comments;
  newComment;
  recipe;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: ActivatedRoute,
              private recipeService: RecipesService,
              private toastController: ToastController) {}

  ngOnInit(): void {

    this.router.params.subscribe(async params => {
      const recipeId = params.id;
      this.recipe = await this.recipeService.get(recipeId);
      this.comments =   this.recipe.comments;
    });

    this.form = this.formBuilder.group(
      {
        name:"",
        content: ""
      }
    )
  }

  async addNewComment() {
    this.recipe.comments.push(this.form.value);
    this.recipeService.update(this.recipe);
    const toast = await this.toastController.create({
      message: "Commentario agregado exitosamente",
      duration: 2000,
      color: 'success'
    });
    await toast.present();
    return this.newComment = {};
  };
}
