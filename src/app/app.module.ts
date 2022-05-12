import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompanyComponent } from './views/company/company.component';
import { ClientsComponent } from './views/clients/clients.component';
import { VideosComponent } from './views/videos/videos.component';
import { AboutComponent } from './views/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    CompanyComponent,
    ClientsComponent,
    VideosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
