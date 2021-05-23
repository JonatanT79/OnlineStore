import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
/** product component*/
export class ProductComponent {
  /** product ctor */
  constructor(private productService: ProductService, private router: Router) {

  }

  navigateToProductDetailsPage() {
    this.router.navigateByUrl("/view-product");
  }

  productList = this.productService.getAllproducts();
}
