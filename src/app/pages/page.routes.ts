import { Routes } from "@angular/router";

export const PAGE_ROUTES: Routes = [
    { path: 'customers', loadChildren: () => import('./customer/customer.routes').then(m => m.CUSTOMER_ROUTES) },  
    { path: 'suppliers', loadChildren: () => import('./supplier/supplier.routes').then(m => m.SUPPLIER_ROUTES) }    
];