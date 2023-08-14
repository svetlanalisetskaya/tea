import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeaDescriptionPipe} from "./pipes/tea-description.pipe";
import {CatalogCardComponent} from "./components/catalog-card/catalog-card.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    CatalogCardComponent,
    TeaDescriptionPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CatalogCardComponent,
    TeaDescriptionPipe,
  ]
})
export class SharedModule {
}
