import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CardService} from "../../../shared/services/card.service";
import {CardType} from "../../../../types/card-type";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-product',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  card!: CardType;
  private subscription: Subscription | null = null;

  constructor(private cardService: CardService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.subscription = this.cardService.getCard(+params['id'])
          .subscribe({
            next: (data => {
              this.card = data
            }),
            error: (error) => {
              console.log(error);
              this.router.navigate(['/']);
            }
          });
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
