import { Component, OnInit } from '@angular/core';
//ActivatedRoute è specifico per ogni componente che l'Angular Router carica e contiene informazioni sulla route e i suoi parametri
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  //inject di ActivatedRoute nel costruttore tramite il passaggio di ActivatedRoute come parametro. in questo modo, il componente userà un servizio
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //prende id del prodotto dalla route corrente
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //trova il prodotto che corrisponde all'id preso dalla route
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    //metodo di CartService
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
