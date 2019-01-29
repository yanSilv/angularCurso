import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms'
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { OrderServie } from './order.service';
import { Order, OrderItems } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    {label: "Dinheiro", value: "MON"},
    {label: "Cartão de Debito", value: "DEB"},
    {label: "Cartão Refeição", value: "REF"}
  ];

  constructor(public orderService: OrderServie, 
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.orderForm = this.formBuilder.group({
        name: this.formBuilder.control(''),
        email: this.formBuilder.control(''),
        emailConfirmation: this.formBuilder.control(''),
        address: this.formBuilder.control(''),
        number: this.formBuilder.control(''),
        optionalAddress: this.formBuilder.control(''),
        paymentOptions: this.formBuilder.control('')

      });
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItem(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item:CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item:CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(obj: Order) {
    obj.orderItem = this.cartItem().map((item:CartItem) => new OrderItems(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(obj).subscribe((objId: string) => {
      console.log(`Compra concluida: ${objId}`);
      this.router.navigate(['/order-sumary']);
      this.orderService.clear()
    });
  }

}
