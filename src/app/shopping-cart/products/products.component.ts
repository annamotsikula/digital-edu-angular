import { Component, OnInit } from '@angular/core';
import { ICategory, IProductCard } from '../meta-data/product.interface';
import { ProductService } from '../meta-data/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  
})
export class ProductsComponent implements OnInit {
  products: IProductCard[] = [];
  getValue: any
  constructor(private _service: ProductService) {
   this.products = this._service.getProductList()
  }

  ngOnInit(): void {
    console.log(this.products)
    console.log(ICategory.JEWELRY)
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
}
