import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.scss']
})
export class ProductdescriptionComponent implements OnInit {
  productId:number=545455;
  productName:string="Product1";
  vendorCode:number=326517;
  vendorName:string="xyzvendor";
  minimumOrderQuantity:number=100;
  maximumOrderQuantity:number=1000;
  orderQuantity:number=1;
  unitOfMeasure:number=66;
  unitPrice:number= 1500;
  weight:number=1;
  individualPkgLength:number=23;
  individualPkgWidth:number=12;
  individualPkgHeight:number=13;
  palletLength:number=10;
  palletWidth:number=10;
  palletHeight:number=10;
  ageRestrictionFlag:boolean=true;
  ageRestriction:number=18;
  geoRestrictionFlag:string="yes/no";
  lastUpdateDate:string="2018-08-04T18:30:00.000Z";
  lastUpdateBy:string="shiva kumar p";
  creationDate:string="2018-08-04T18:30:00.000Z";
  createdBy:string="shiva kumar p"
  constructor() { }

  ngOnInit() {
  }

}
