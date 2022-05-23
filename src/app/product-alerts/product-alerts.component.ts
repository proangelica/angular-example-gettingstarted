// Input permette di ricevere i dati del prodotto, EventEmitter serve per gli eventi
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

//esporta la classe che gestisce le funzionalità per il component
@Component({
  selector: 'app-product-alerts', //identifica il component (convenzione: inizia con app-)
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  //@Input() indica che il valore della proprietà è passato dal genitore del component, ProductListComponent
  @Input() product!: Product;
  constructor() {}

  //@Output() permette al ProductAlertsComponent di emettere l'evento quando il valore della proprietà notify cambia
  @Output() notify = new EventEmitter();

  ngOnInit(): void {}
}
