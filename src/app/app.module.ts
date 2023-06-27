import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app.component';
import { HeaderComponent } from './global/components/header/header.component';
import { BannerComponent } from './global/components/banner/banner.component';
import { FooterComponent } from './global/components/footer/footer.component';
import { ListComponent } from './characters/components/list/list.component';
import { CardsComponent } from './characters/components/cards/cards.component';
import { HomeComponent } from './characters/views/home/home.component';
import { FavoritesComponent } from './characters/views/favorites/favorites.component';
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DatePipeComponent } from './characters/components/date-pipe/date-pipe.component';
registerLocaleData(localeES, 'es');
import { MenuHambComponent } from './characters/components/menu-hamb/menu-hamb.component';
import { HomeMenuComponent } from './characters/components/home-menu/home-menu.component';
import { ListItemsComponent } from './characters/components/list-items/list-items.component';
import { BannerFavoriteComponent } from './global/components/banner-favorite/banner-favorite.component';
import { ImageContainerComponent } from './characters/components/image-container/image-container.component';
import { PlayerComponent } from './modules/player/player.component';


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
    DatePipeComponent,
    MenuHambComponent,
    HomeMenuComponent,
    BannerFavoriteComponent,
    ListItemsComponent,
    ImageContainerComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }