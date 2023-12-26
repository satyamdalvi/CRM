import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guard/auth.guard';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './services/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [
    AuthGuard,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
