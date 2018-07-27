import { Injectable } from '@angular/core';
import { GlobalHelperService } from './services/global-helper.service';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class GlobalHelper {

	constructor(private globalHelperService: GlobalHelperService){}

	castStateAndCountry(countries, allStates, countryId, stateId) {
		let selectedCountry = countries[countryId];
		let selectedStatesList = allStates[parseInt(countryId) + 1];
		let selectedState = selectedStatesList.split('|')[stateId];
		return { "country": selectedCountry, "state": selectedState };
	}

	recastStateAndCountry(countries, allStates, countryStr, stateStr){


		let countryId:number;

		countries.forEach(function(value, index){
			if(value == countryStr){
				countryId = index;
				return;
			}
		});

		let statesString = allStates[countryId + 1];
		let states = statesString.split('|');

		let stateId:number;

		states.forEach(function(value, index){
			if(value == stateStr){
				stateId = index;
				return;
			}
		});
		
		return { "countryId": countryId, "stateId": stateId };
	}

	async readJsonFile(filename){
		return await this.globalHelperService.readJsonFile(filename);
	}


}