import {Component, OnInit} from '@angular/core';

import {Ingredient} from './ingredients.interface';
import {HttpService} from '../../core/http/http.service';

@Component({
  selector: 'i-root',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  lastIngredients: Ingredient[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData('ingredients').subscribe((ingredients: Ingredient[]) => {
      this.lastIngredients = ingredients.reverse();
    });
  }

}
