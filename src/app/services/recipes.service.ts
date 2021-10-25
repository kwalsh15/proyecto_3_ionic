import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Recipe } from 'src/models/recipe';
import { StepFormComponent } from '../step-form/step-form.component';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipe: Recipe;
  stepComponents: StepFormComponent[] = [];

  constructor() { }

  save = async (recipe: Recipe) => {
    const lastId = await this.getLastId();
    recipe.id = lastId + 1;
    await Storage.set({
      key: String(recipe.id),
      value: JSON.stringify(recipe),
    });
  };

  get = async (id: number): Promise<Recipe> => {
    const { value } = await Storage.get({ key: String(id) });
    const recipe: Recipe = JSON.parse(value);
    return recipe;
  };

  index = async (): Promise<Recipe[]> => {
    const recipes: Recipe[] = [];

    const keysObj = await Storage.keys();
    const keys = keysObj.keys;

    for await (const key of keys) {
      const recipe: Recipe = await this.get(Number(key));
      recipes.push(recipe);
    }
    return recipes;
  };

  async update(recipe: Recipe) {
    await Storage.set({
      key: String(recipe.id),
      value: JSON.stringify(recipe),
    });
  }

  private getLastId = async (): Promise<number> => {
    const keysObj = await Storage.keys();
    return keysObj.keys.length;
  };

}
