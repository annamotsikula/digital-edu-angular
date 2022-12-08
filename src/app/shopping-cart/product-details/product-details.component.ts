import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IProduct } from '../meta-data/product.interface';
import { ProductService } from '../meta-data/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: IProduct | undefined
  constructor(private _act: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._act.data.pipe(
      map(data => data['singleProduct'])
      )
    .subscribe(product => {
      product.oldPrice = product.price + (product.price * product.discountPercentage / 100 )
      this.product = product
      // console.log(product)
    })
  }
  ngOnDestroy(): void {
    // console.log('Component destroyed')
  }
  returnToProducts() {
    this._router.navigate(['main/products'])

  }
}
