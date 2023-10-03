import { Routes } from "@angular/router";

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./app/pages/page.routes').then((m) => m.PAGE_ROUTES)
    }];