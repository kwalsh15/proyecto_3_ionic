import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from 'src/models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private readonly URL = '../assets/recipe-data.json';

  constructor(protected httpClient: HttpClient) {}

  public getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.URL);
  }

}
