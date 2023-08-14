import {Component, Input, OnInit} from '@angular/core';
import {CardType} from "../../../../types/card-type";

declare var $: any;

@Component({
  selector: 'catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss']
})
export class CatalogCardComponent implements OnInit {

  @Input() card!: CardType;

  ngOnInit() {
    $('.tea-image').magnificPopup({
      type: 'image'
    });
  }
}
