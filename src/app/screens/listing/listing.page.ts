import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/models/recipe';
import { Storage } from '@capacitor/storage';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage {
  foods: Recipe[] = [];
  nombrefiltrado = '';
  constructor(private recipeService: RecipesService, private router: Router) {
    this.router.events.subscribe(async (e) => {
      const currentRoute = e['url'];
      if(currentRoute == '/home/listing') {
        this.foods = [];
        this.foods = await this.recipeService.index();
      }
    })
  }

  async ionViewWillEnter() {
    this.loadInitialData();
    this.foods = [];
    this.foods = await this.recipeService.index();
  }

  goToDetailPage(id: number) {
    this.router.navigate(['recipe-steps', id]);
  }

  comments(id: number){
    this.router.navigate(['comments', id]);
  }

  async loadInitialData() {
    const recipes = await this.recipeService.index();
    console.log(recipes);
    if(recipes.length == 0) {
      let recipe: Recipe = {
        "id": 1,
        "name": "Molotes de Oaxaca",
        "author": "Juanito Martínez",
        "imageUrl": "https://i.blogs.es/6d3c0a/1366_2000-4/840_560.jpg",
        "description": "Esta receta es deliciosa",
        "comments": [],
        "steps": [
          {
            "name": "",
            "ingredients": ["chili", "flour"],
            "cookware": ["spoon", "knife"],
            "videoUrl": "https://www.youtube.com/embed/KXw8CRapg7k"
          }
        ]
      }
      this.recipeService.save(recipe).then(res => {
        const recipe1 = {
          "id": 2,
          "name": "Arroz Con Leche",
          "author": "Manuel Amores",
          "imageUrl": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F03%2F25%2Frecetas-1092-arroz-con-leche-2000.jpg&q=85",
          "description": "Esta receta es deliciosa",
          "comments": [],
          "steps": [
            {
              "name": "name",
              "ingredients": ["rice", "milk", "cinnamon"],
              "cookware": ["spoon", "knife"],
              "videoUrl": "https://www.youtube.com/watch?v=xQsPiAf-t1Q"
            }
          ]
        }
        this.recipeService.save(recipe1).then(res => {
          const recipe2 = {
            "id": 3,
            "name": "Arroz Con Atún",
            "author": "Manuel Quesada",
            "imageUrl": "https://i.ytimg.com/vi/27f3_Ja0JcY/maxresdefault.jpg",
            "description": "Esta receta es deliciosa",
            "comments": [],
            "steps": [
              {
                "name": "LMAO",
                "ingredients": ["rice", "tuna"],
                "cookware": ["spoon", "knife"],
                "videoUrl": "https://www.youtube.com/watch?v=27f3_Ja0JcY"
              }
            ]
          }
    
          this.recipeService.save(recipe2);
    
        });
      });
    }
  }
}
