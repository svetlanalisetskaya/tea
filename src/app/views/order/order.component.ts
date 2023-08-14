import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {OrderService} from "../../shared/services/order.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  showBlock: boolean = false;
  showForm: boolean = true;
  showError: boolean = false;
  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  submitForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^([+]?)([0-9]{11})+$')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('^[а-яА-Я0-9\-\/ ]+$')]],
    product: [''],
    comment: [''],
  });

  constructor(private fb: FormBuilder, private orderService: OrderService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
       this.submitForm.get('product')?.setValue(params['product']);
      }
    });
  };

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  submit() {
    this.subscriptionOrder = this.orderService.createOrder({
      name: this.submitForm.value.name as string,
      last_name: this.submitForm.value.lastName as string,
      phone: this.submitForm.value.phone as string,
      country: this.submitForm.value.phone as string,
      zip: this.submitForm.value.zip as string,
      address: this.submitForm.value.address as string,
      product: this.submitForm.value.product as string,
      comment: this.submitForm.value.comment as string,
    })
      .subscribe(response => {
        if (response.success && response.success == 1 && !response.message) {
          this.showBlock = true;
          this.showForm = false;
        } else {
          this.showError = true;
        }
      })
  }
}
