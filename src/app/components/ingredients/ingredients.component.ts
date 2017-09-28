import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from '../../shared/CONSTANTS';
import { HttpService } from '../../core/http/http.service';
import { Ingredient } from './ingredients.interface';
import { typesOfProducts } from './ingredients-add/types-of-products.enum';

@Component({
  selector: 'i-root',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  lastIngredients: Ingredient[] = [];

  constructor(private httpService: HttpService) {  }

  typeReadable(type: string): string {
    return CONSTANTS.PRODUCTS_TYPE[typesOfProducts[type]];
  }

  ngOnInit() {
    this.httpService.getData('ingredients').subscribe((ingredients: Ingredient[]) => {
      this.lastIngredients = ingredients.reverse();
    });
  }
}
