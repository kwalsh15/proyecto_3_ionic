import { Step } from './steps';

export class Recipe {
  id: Number;
  name: string;
  author: string;
  imageUrl: string;
  description: string;
  steps: Step[];

  constructor(name, author, imageUrl, steps,description) {
      {
        this.name = name;
        this.author = author;
        this.imageUrl = imageUrl;
        this.steps = steps;
        this.description = description

      }
  }
}
