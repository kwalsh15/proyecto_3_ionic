import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../services/recipes.service";
import { Recipe } from 'src/models/recipe';
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-recipe-steps',
  templateUrl: './recipe-steps.page.html',
  styleUrls: ['./recipe-steps.page.scss'],
})
export class RecipeStepsPage implements OnInit {
  recipe: Recipe;

  constructor(private recipesService: RecipesService, private dom: DomSanitizer, private route: ActivatedRoute) { 
    this.route.params.subscribe(async params => {
      const recipeId = params['id'];
      recipesService.get(recipeId).then(res => {
        this.recipe = res;
      });
   });
  }

  ngOnInit() { }

  sanitize(vid) {
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

}
