import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor() {

  }

  productList = [new ProductModel("Bokhylla", 149.90), new ProductModel("Lavalampa", 99), new ProductModel("Väckarklocka", 49)]

  getAllproducts() {
    console.log(this.productList);
    return this.productList
  }
}
