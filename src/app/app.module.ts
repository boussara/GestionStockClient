import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitMockService } from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './sideBar/sideBar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
   declarations: [
      AppComponent,
      ProduitComponent,
      NavbarComponent,
      SideBarComponent,
      ContentComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule
   ],
   providers: [
      ProduitMockService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
