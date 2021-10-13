import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../api/recipes.service";
import { Recipe } from 'src/models/recipe';
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-recipe-steps',
  templateUrl: './recipe-steps.page.html',
  styleUrls: ['./recipe-steps.page.scss'],
})
export class RecipeStepsPage implements OnInit {
  recipe: Recipe;

  constructor(private recipesService: RecipesService, private dom: DomSanitizer) { 
    this.recipesService.getRecipes().subscribe(res => {
      this.recipe = res[0];
    });
  }

  ngOnInit() { }

  sanitize(vid) {
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

}
