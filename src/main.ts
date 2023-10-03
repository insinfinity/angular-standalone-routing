import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { MAIN_ROUTES } from './main.routes';


bootstrapApplication(AppComponent,
  {
    providers: [
      importProvidersFrom(RouterModule.forRoot(MAIN_ROUTES))
    ]
  }).catch(err => console.error(err));