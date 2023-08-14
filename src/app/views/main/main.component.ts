import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {environment} from "../../../environments/environment";


declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  private observable: Observable<string>;
  private subscription: Subscription | null = null;
  showPopup: boolean = false;

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  constructor(private modalService: NgbModal) {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next();
      }, 10000);
    })
  }

  ngOnInit() {
    console.log(environment.production);

    $("#accordion").accordion({
      heightStyle: "content"
    });
  }

  ngAfterViewInit() {
    this.subscription = this.observable.subscribe(() => {
      this.modalService.open(this.popup, {})
    })
  };

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
