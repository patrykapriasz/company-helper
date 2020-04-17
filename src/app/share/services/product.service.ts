import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {

  private products: Product[];
  private productUpdate = new Subject<Product[]>();

  constructor(private httpClient: HttpClient){}

  getAllProducts() {
    this.httpClient.get<{message: string, content: Product[]}>('http://localhost:3000/products').subscribe(result => {
      this.products = result.content;
      this.productUpdate.next([...this.products]);
    });
  }

  getUpdatedProductListener() {
    return this.productUpdate.asObservable();
  }

}
