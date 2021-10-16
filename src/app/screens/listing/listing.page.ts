import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/models/recipe';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  //categories: Category[] = [];
  foods: Recipe[] = [];
  constructor(private recipeService: RecipesService, private router: Router) {}

  async ngOnInit() {
    //this.getCategories();
    this.foods = await this.recipeService.index();

    console.log(this.foods);
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
}