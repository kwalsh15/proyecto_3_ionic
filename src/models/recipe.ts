import { Step } from './steps';

export class Recipe {
  id: Number;
  name: string;
  author: string;
  imageUrl: string;
  description: string;
  steps: Step[];

  constructor(recipe) {
      {
        this.name = recipe.name;
        this.author = recipe.author;
        this.imageUrl = recipe.imageUrl;
        this.steps = recipe.steps;
        this.description = recipe.description

      }
  }
}
