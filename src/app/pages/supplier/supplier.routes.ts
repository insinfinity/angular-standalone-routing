import { Routes } from "@angular/router";
import { SupplierComponent } from "./supplier.component";

export const SUPPLIER_ROUTES: Routes = [
    { path: '', component: SupplierComponent },
    { path: 'create', loadComponent: () => import('./create/create.component').then(m => m.CreateComponent) },
    {
        path: ':id',
        loadComponent: () => import('./show/show.component').then(m => m.ShowComponent)
    },
    {
        path: ':id/edit',
        loadComponent: () => import('./edit/edit.component').then(m => m.EditComponent)
    }
];