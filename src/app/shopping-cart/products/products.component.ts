import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  showForm: boolean = false
  addProductForm: FormGroup;
  constructor(private _service: ProductService, private _router: Router) {
    this.addProductForm = new FormGroup({
      productTitle : new FormControl('', Validators.required),
      price: new FormControl(120, Validators.required),
      discountPercentage: new FormControl(15, Validators.required),
      description: new FormControl('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus voluptatibus ipsa rerum nihil fugit culpa nisi laboriosam nesciunt molestiae id perferendis, architecto, doloremque maxime, illo ut modi debitis maiores re', Validators.required),

    }

    )
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
      console.log('data refreshed')
     })
  }
  getResults() {
      console.log('do search')
      this._service.searchForData(this.searchKey).subscribe(data => {
        this.products = data
      })
    
  }
  addProduct() {
    if(this.addProductForm.valid) {
      const title = this.addProductForm.value.productTitle 
      this._service.addProduct(title).subscribe((data) => {
        alert('The product added successfully')
        console.log(data);
        this.products.push(data)
        
      })
    }

  }

  delete(product: IProduct) {
    this._service.deleteProduct(product.id).subscribe(_ => {
      alert(`Removed Product: ${product.title} ` )
    })

  }

}
