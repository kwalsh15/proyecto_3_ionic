export class Step {
  ingredients: string[];
  cookware: string[];
  videoUrl: string;
  name: string;
  constructor(step) {
      {;
        this.name = step.name;
        this.ingredients = step.ingredients;
        this.cookware = step.cookware;
        this.videoUrl = step.videoUrl;
      }
  }
}