import { Component, OnInit } from '@angular/core';
import { ProductService } from './productcatalog.service';
import { LocalStorageService } from 'ngx-store';


@Component({
	selector: 'app-productcatalog',
	templateUrl: './productcatalog.component.html',
	styleUrls: ['./productcatalog.component.scss']
})
export class ProductcatalogComponent implements OnInit {

	totalProducts;
	productsLimit;
	productsOffset;
	productsPageIndex;
	products;

	constructor(private localStorage: LocalStorageService, private productService: ProductService) { 
	}

	ngOnInit() {
		this.totalProducts = 10;
		this.productsLimit = 9;
		this.productsOffset = 0;
		this.productsPageIndex = 1;
		this.products = [];
		// this.getTotalProductsCount();
		this.fetchProducts(this.productsLimit, this.productsOffset);
	}



	getTotalProductsCount(){
		this.productService.productsCount(function(response){
			this.totalProducts = response.productsCount;
		});
	}   

	paginateProducts = function (index) {
		this.productsPageIndex = index;
		if (index > 1) {
			this.productsOffset = (index - 1) *this.productsLimit;
		} else {
			this.productsOffset = (index * this.productsLimit) - this.productsLimit;
		}

		this.fetchProducts(this.productsLimit, this.productsOffset);
	}
	
	
	
	fetchProducts(limit,offset){
		let thisObj = this;
		let serviceInput = {
			"limit": limit,
			"offset": offset
		};
		let userId = thisObj.localStorage.get('userId');
		if(userId != null){
			thisObj.productService.productsFetch(serviceInput, function(response){

				thisObj.products = response.products;
				console.log(thisObj.products);
			});
		}
	}



}
