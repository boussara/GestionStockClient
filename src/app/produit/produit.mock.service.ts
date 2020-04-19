import { Injectable } from '@angular/core';
import { Produit } from './../shared/produit';

@Injectable()
export class ProduitMockService{

  private PRODUITS:Produit[]=[];

  constructor(){
let P1:Produit = new Produit('Livre',50,20);
let P2:Produit = new Produit('cahier',50,20);

    this.PRODUITS.push(P1);
    this.PRODUITS.push(P2);

}
public getProduits():Produit[]{

  return this.PRODUITS;
}


}
