import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Recipe } from 'src/models/recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipe: Recipe;

  constructor() { }

  save = async (recipe: Recipe) => {
    let lastId = await this.getLastId();
    recipe.id = lastId + 1;
    await Storage.set({
      key: String(recipe.id),
      value: JSON.stringify(recipe),
    });
  };

  get = async (id: number): Promise<Recipe> => {
    const { value } = await Storage.get({ key: String(id) });
    let recipe: Recipe = JSON.parse(value);
    return recipe;
  }

  index = async (): Promise<Recipe[]> => {
    let recipes: Recipe[] = [];

    let keysObj = await Storage.keys();
    const keys = keysObj.keys;

    for await (const key of keys) {
      let recipe: Recipe = await this.get(Number(key));
      recipes.push(recipe);
    }
    return recipes;
  }

  private getLastId = async (): Promise<number> => {
    let keysObj = await Storage.keys();
    return keysObj.keys.length;
  }
  
}
