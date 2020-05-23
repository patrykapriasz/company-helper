import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductParameter } from '../models/productParameter.model';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ProductParameterService {

  private productParameters: ProductParameter[];
  private updatedProductParameter = new Subject<ProductParameter[]>();

  constructor(private http:HttpClient) {}

  getProductParameter(productId: number) {
    this.http.get<{message: string, content: ProductParameter[]}>(environment.apiUrl+'/products/parameters/'+productId).subscribe(
      result=> {
        this.productParameters = result.content;
        this.updatedProductParameter.next([...this.productParameters]);
      }
    );
  };

  getUpdatedProductParameter() {
    return this.updatedProductParameter.asObservable();
  }

}
