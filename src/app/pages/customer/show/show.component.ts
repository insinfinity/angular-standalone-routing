import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Customer, CustomerService } from 'src/app/services/customer.service';

@Component({
  standalone: true,
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  imports: [ RouterLink, NgIf ]
})
export class ShowComponent implements OnInit {
  constructor(private customerService: CustomerService, private route: ActivatedRoute) {}

  customer?: Customer;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') ?? '0');
      this.customerService.getCustomer(id).then((customer) => this.customer = customer);
    });
  }
}
