import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderServie {
    
    constructor(public cartService: ShoppingCartService) {}

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

}