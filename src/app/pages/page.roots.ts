import { Routes } from "@angular/router";

export const PAGE_ROUTES: Routes = [
    { path: 'customers', loadChildren: () => import('./customer/customer.roots').then(m => m.CUSTOMER_ROUTES) },  
    { path: 'suppliers', loadChildren: () => import('./supplier/supplier.roots').then(m => m.SUPPLIER_ROUTES) }    
];