import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MEAT_API } from 'app/app.appi';
import { LoginService } from '../security/login/login.service'

@Injectable()
export class OrderServie {
    
    constructor(
        public cartService: ShoppingCartService, 
        private http:HttpClient,
        private loginService: LoginService) {}

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem){
        return this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        return this.cartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    checkOrder(obj: Order): Observable<string> {
        let headers = new HttpHeaders();

        if (this.loginService.isLoggedIn()) {
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
        }
        
        return this.http.post<Order>(`${MEAT_API}/orders`, obj, {headers: headers}).map(obj => obj.id);
    }

    clear() {
        this.cartService.clear()
    }
}