import { Component, OnInit } from '@angular/core';
import { Produit } from '../../domain/produit';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  data: Produit [];
  constructor(private _service:  ProductsService) { }

  ngOnInit() {
    this.data = this._service.getAllProducts();
  }

}
