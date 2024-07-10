import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { GrpcWebClientBase } from 'grpc-web';
import {  ProductsClient } from './generated/products_pb_service';
import { CreateProductRequest, response } from './generated/products_pb';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private client: ProductsClient;

  constructor() {
    this.client = new ProductsClient(environment.baseApiUrl);

  }
  createProduct(product : any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      debugger
      const request = new CreateProductRequest();
      request.setId(product.Id)
      request.setProductname(product.ProductName);
      request.setProductdescription(product.ProductDescription);
      request.setProductprice(product.ProductPrice);
      request.setProductstock(product.ProductStock);
      const metadata = new grpc.Metadata();

      this.client.createProduct(request, metadata, (err, res: response | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(res!.getId());
        }
      });
    });
  }
}
