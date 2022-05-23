import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
//fornisce metodi per generare controlli
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  //in questo modo è possibile prendere il nome e l'indirizzo dell'utente tramite il metodo group() che setta checkoutForm come un modello form
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  //avviene Injection
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  //metodo usato per "processare" il form, svuota anche il carrello e pulisce il form
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
