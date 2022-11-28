import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../meta-data/product.interface';
import { ProductService } from '../meta-data/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: IProduct | undefined
  paramID: number
  constructor(private _act: ActivatedRoute, private _productService: ProductService) {
    this.paramID = Number(this._act.snapshot.paramMap.get('id'))
    console.log(this.paramID)
   }

  ngOnInit(): void {
    this.getDetails(this.paramID)
    .subscribe(product => {
      product.oldPrice = product.price + (product.price * product.discountPercentage / 100 )
      this.product = product
      console.log(product)
    })
  }
  ngOnDestroy(): void {
    console.log('Component destroyed')
  }
  getDetails(id: number): Observable<IProduct> {
    return this._productService.getSingleProduct(id)
  }
}
