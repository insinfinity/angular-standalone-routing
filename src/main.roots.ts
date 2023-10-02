import { Routes } from "@angular/router";

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./app/pages/page.roots').then((m) => m.PAGE_ROUTES)
    }];