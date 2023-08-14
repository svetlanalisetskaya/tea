import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.module';
import {CatalogComponent} from "./catalog/catalog.component";
import {CardComponent} from "./card/card.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    CatalogComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardsRoutingModule,
    RouterModule
  ],
  exports: [
    CardsRoutingModule
  ]
})
export class CardsModule { }
