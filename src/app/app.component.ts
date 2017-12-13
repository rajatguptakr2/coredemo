import { Component } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './products.service';
// import { appService } from 'app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

export class AppComponent {

  name = 'Angular';
  DefaultData:string = 'Test';
  status:boolean = true;

  appList:any[] = [
    {
      "ID":"1",
      "Name":"One"
    },
    {
      "ID":"2",
      "Name":"Two"
    },
  ]


}
