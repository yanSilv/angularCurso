import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Restaurant } from './restaurant/restaurant.model'
import { MEAT_API } from 'app/app.appi'
import { Observable } from 'rxjs/Observable';

import { ErrorHandler } from '../app.error-handler'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { MenuItem } from 'app/restaurant-detail/menu-item/menu.item.model';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http ){}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handerError);
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handerError);
    }
    
    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handerError);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
                        .map(response => response.json())
                        .catch(ErrorHandler.handerError);
    }
}