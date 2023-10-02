import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer.component";

export const CUSTOMER_ROUTES: Routes = [
    { path: '', component: CustomerComponent },
    { path: 'create', loadChildren: () => import('./create/create.component').then(m => m.CreateComponent) },
    {
        path: ':id',
        loadChildren: () => import('./show/show.component').then(m => m.ShowComponent)
    },
    {
        path: ':id/edit',
        loadChildren: () => import('./edit/edit.component').then(m => m.EditComponent)
    },
];