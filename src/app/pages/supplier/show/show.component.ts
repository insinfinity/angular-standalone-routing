import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Supplier, SupplierService } from 'src/app/services/supplier.service';

@Component({
  standalone: true,
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  imports: [ RouterLink, NgIf]
})
export class ShowComponent implements OnInit {
  constructor(private supplierService: SupplierService, private route: ActivatedRoute) {}

  supplier?: Supplier;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') ?? '0');
      this.supplierService.getSupplier(id).then((supplier) => this.supplier = supplier);
    });
  }
}
