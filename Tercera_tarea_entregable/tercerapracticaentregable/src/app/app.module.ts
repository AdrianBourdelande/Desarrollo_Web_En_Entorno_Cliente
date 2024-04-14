import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { MakersComponent } from './components/makers/makers.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CatalogService } from './service/catalog.service';
import { FormsModule } from '@angular/forms';
import { ShowcarmodelsComponent } from './components/showcarmodels/showcarmodels.component';
import { FavouritesComponent } from './components/favourites/favourites.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    MakersComponent,
    HomeComponent,
    CatalogComponent,
    ShowcarmodelsComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    CatalogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
