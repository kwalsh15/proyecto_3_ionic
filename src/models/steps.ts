export class Step {
  ingredients: string[];
  cookware: string[];
  videoUrl: string;

  constructor(step) {
      {
        this.ingredients = step.ingredients
        this.cookware = step.cookware
        this.videoUrl = step.videoUrl
        
      }
  }
}