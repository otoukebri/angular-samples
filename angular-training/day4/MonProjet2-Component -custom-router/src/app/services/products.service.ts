import { Injectable } from '@angular/core';
import { Produit } from '../domain/produit';

@Injectable()
export class ProductsService {

  constructor() { }
  getAllProducts(): Produit[] {
    return [
      {code: 'P100', nom: 'Café', prixUnitaire: 1200},
      {code: 'P101', nom: 'Thé', prixUnitaire: 3000},
      {code: 'P101', nom: 'Jus', prixUnitaire: 3000}
    ];
  }
}
