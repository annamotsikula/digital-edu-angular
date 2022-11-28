import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory, IProduct } from '../meta-data/product.interface';
import { ProductService } from '../meta-data/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  getValue: any;
  searchKey: string = ''
  constructor(private _service: ProductService, private _router: Router) {
  }

  ngOnInit(): void {
    this.getProducts()

  }
  setClass(cat: string): string {
    let className: string = ''
    cat = cat.toUpperCase();
    switch(cat) {
      case ICategory.MEN:
        className = 'men';
        break;
      case ICategory.WOMEN:
        className = 'women';
        break;
      case ICategory.JEWELRY: 
      className = 'jew';
      break;
      default:
        className  = ''
    }
    return className
  }

  getRating(result: number) {
    console.log(`This product has ${result} stars`)
  }
  redirectToDetails(productID: number) {
    this._router.navigate(['main/products', productID])
  }
  getProducts() {
    this._service.getProductList().subscribe(result => {
      this.products = result
     })
  }
  getResults() {
      console.log('do search')
      this._service.searchForData(this.searchKey).subscribe(data => {
        this.products = data
      })
    
  }
}
