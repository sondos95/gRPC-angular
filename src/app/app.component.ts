import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Products, ProductsClient } from './generated/products_pb_service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gRPC-angular';
  result: string="";

  constructor(private productService : AppService) {
    
  }
  productForm = new FormGroup({
    Id: new FormControl(''),
    ProductName: new FormControl(''),
    ProductDescription: new FormControl(''),
    ProductPrice: new FormControl(0),
    ProductStock: new FormControl(0),

  });
  onSubmit(){
    debugger
    console.log(this.productForm.value);
    this.productService.createProduct(this.productForm.value).then(result => {
      this.result = result;
    })
    .catch(error => {
      console.error('Error adding numbers:', error);
    });
  }
}
