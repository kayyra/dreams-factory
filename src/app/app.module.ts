import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './global/components/header/header.component';
import { BannerComponent } from './global/components/banner/banner.component';
import { FooterComponent } from './global/components/footer/footer.component';
import { ListComponent } from './characters/components/list/list.component';
import { CardsComponent } from './characters/components/cards/cards.component';
import { HomeComponent } from './characters/views/home/home.component';
import { FavoritesComponent } from './characters/views/favorites/favorites.component';
import { BannerFavoriteComponent } from './global/components/banner-favorite/banner-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ListComponent,
    CardsComponent,
    HomeComponent,
    FavoritesComponent,
    BannerFavoriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
