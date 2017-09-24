import {cloneDeep, remove, toNumber} from 'lodash';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalDirective} from 'ngx-bootstrap';

import {CONSTANTS} from '../../../shared/CONSTANTS';
import {HttpService} from '../../../core/http/http.service';
import {InputFile} from '../../../core/http/http.interface';
import {typesOfProducts} from './types-of-products.enum';
import {UtilsService} from '../../../core/utils/utils.service';

@Component({
  selector: 'i-add',
  templateUrl: './ingredients-add.component.html',
  styleUrls: ['./ingredients-add.component.scss']
})
export class IngredientsAddComponent implements OnInit {
  addIngredientsForm: FormGroup;
  ingredientTypes: string[] = [];
  private uploadImage: {file?: InputFile, url?: string, error?: string} = {};
  @ViewChild('ingredientsModal') ingredientsModal: ModalDirective;

  constructor(private httpService: HttpService,
              private formBuilder: FormBuilder,
              private utilsService: UtilsService) { }

  addNewIngredient() {
    const {carbs, fat, proteins} = this.addIngredientsForm.value;
    const kcal: number = toNumber(carbs) * 4 + toNumber(proteins) * 4 + toNumber(fat) * 9;
    const inputsValues = cloneDeep(this.addIngredientsForm.value);

    delete inputsValues.file;

    this.httpService.postData( 'ingredients', {...inputsValues, kcal}, this.uploadImage.file)
      .then(() => this.ingredientsModal.hide());
  }

  resetForm() {
    this.uploadImage = {};
    this.addIngredientsForm.reset();
  }

  readInputFile(event) {
    const data: {file?: InputFile} = this.httpService.readInputFile(event);

    if(data.file) {
      this.uploadImage.file = data.file;
    } else {
      this.addIngredientsForm.get('file').reset();
    }
  }

  typeReadable(type: string): string {
    return CONSTANTS.PRODUCTS_TYPE[typesOfProducts[type]];
  }

  setTypeOfProducts(type: string) {
    this.addIngredientsForm.get('genre').setValue(type);
  }

  checkIsSelected(type: string): boolean {
    return type === this.addIngredientsForm.get('genre').value;
  }

  ngOnInit() {
    this.ingredientTypes = this.utilsService.enumToKeysArray(typesOfProducts);
    this.addIngredientsForm = this.formBuilder.group({
      approxWeigth: 0,
      carbs: [0, Validators.required],
      fat: [0, Validators.required],
      genre: ['', Validators.required],
      name: ['', Validators.required],
      proteins: [0, Validators.required],
      file: ''
    });
  }
}
