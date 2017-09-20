import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {toNumber} from 'lodash';

@Component({
  selector: 'i-add',
  templateUrl: './ingredients-add.component.html',
  styleUrls: ['./ingredients-add.component.scss']
})
export class IngredientsAddComponent implements OnInit {
  addIngredientsForm: FormGroup;

  constructor(private angularFireDatabase: AngularFireDatabase,
              private formBuilder: FormBuilder) { }

  addNewIngredient() {
    const {carbs, fat, proteins} = this.addIngredientsForm.value;
    const kcal: number = toNumber(carbs) * 4 + toNumber(proteins) * 4 + toNumber(fat) * 9;

    this.angularFireDatabase.list('ingredients').push({
      ...this.addIngredientsForm.value,
      kcal
    });
  }

  resetForm() {
    this.addIngredientsForm.reset();
  }

  ngOnInit() {
    this.addIngredientsForm = this.formBuilder.group({
      approxWeigth: 0,
      carbs: [0, Validators.required],
      fat: [0, Validators.required],
      genre: ['', Validators.required],
      name: ['', Validators.required],
      proteins: [0, Validators.required]
    });
  }
}
