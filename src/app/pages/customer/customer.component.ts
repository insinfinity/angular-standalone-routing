import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer, CustomerService } from 'src/app/services/customer.service';

@Component({
  standalone: true,
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  imports: [ NgFor, RouterLink ]
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  customers: Customer[] = [];

  ngOnInit() {
    this.customerService.getCustomers().then((customers) => this.customers = customers);
  }
}
