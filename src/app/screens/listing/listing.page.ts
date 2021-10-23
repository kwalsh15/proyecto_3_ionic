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
export class ListingPage implements OnInit {
  //categories: Category[] = [];
  foods: Recipe[] = [];
  nombrefiltrado = '';
  constructor(private recipeService: RecipesService, private router: Router) {}

  async ngOnInit() {
    this.foods = await this.recipeService.index();
  }

  /*getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'All',
        image: 'assets/imagenes/icons/all.png',
        active: true,
      },
      {
        id: 2,
        label: 'Hamburguesas',
        image: 'assets/imagenes/icons/burger.png',
        active: false,
      },
      {
        id: 3,
        label: 'Platos',
        image: 'assets/imagenes/icons/dish.png',
        active: false,
      },
      {
        id: 4,
        label: 'Sushi',
        image: 'assets/imagenes/icons/sushi.png',
        active: false,
      },
    ];
  }*/
  goToDetailPage(id: number) {
    this.router.navigate(['recipe-steps', id]);
  }

  comments(id: number){
    this.router.navigate(['comments', id]);
  }
}
