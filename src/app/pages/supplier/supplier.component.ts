import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Supplier, SupplierService } from 'src/app/services/supplier.service';

@Component({
  standalone: true,
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
  imports: [ RouterLink, NgFor ]
})
export class SupplierComponent implements OnInit {
  constructor(private supplierService: SupplierService) {}

  suppliers: Supplier[] = [];

  ngOnInit() {
    this.supplierService.getSuppliers().then((suppliers) => this.suppliers = suppliers);
  }
}