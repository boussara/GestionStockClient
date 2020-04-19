import { Produit } from './../shared/produit';
import { ProduitMockService } from './produit.mock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  constructor(private produitservice: ProduitMockService) { }

  ngOnInit() {

    this.produits=this.produitservice.getProduits();
  }


}
