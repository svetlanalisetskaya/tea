import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardType} from "../../../../types/card-type";
import {Router} from "@angular/router";
import {CardService} from "../../../shared/services/card.service";
import {Subscription, tap} from "rxjs";


@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  cards: CardType[] = [];
  loading: boolean = false;
  private subscription: Subscription | null = null;

  constructor(private cardService: CardService, private router: Router) {
  }

  ngOnInit() {
    this.loading = true;
     this.subscription = this.cardService.getCards()
       .pipe(
         tap(() => {
           this.loading = false;
         })
       )
      .subscribe({
          next: (data) => {
            this.cards = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        },
      )
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}

