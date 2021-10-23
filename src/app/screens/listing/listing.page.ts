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
  constructor(private recipeService: RecipesService, private router: Router) {}

  async ionViewDidEnter() {
    this.foods = [];
    this.foods = await this.recipeService.index();
  }
  goToDetailPage(id: number) {
    this.router.navigate(['recipe-steps', id]);
  }

  comments(id: number){
    this.router.navigate(['comments', id]);
  }
}
