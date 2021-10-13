import { Step } from "./steps";

export class Recipe {
  id: number;
  name: string;
  author: string;
  imageUrl: string;
  steps: Step[];

  constructor(recipe) {
      {
        this.name = recipe.name
        this.author = recipe.author
        this.imageUrl = recipe.imageUrl
        this.steps = recipe.steps
        
      }
  }
}