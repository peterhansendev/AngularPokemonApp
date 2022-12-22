import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { LandingPagePage } from './pages/landing-page/landing-page.page'; 
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { ProfilePage } from './pages/profile/profile.page';
import { TrainerPage } from './pages/trainer/trainer.page'; 
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { LandingpageloginFormComponent } from './landingpagelogin-form/landingpagelogin-form.component';
import { FormsModule } from '@angular/forms';

// Decorator
@NgModule({
  declarations: [
    AppComponent,
    TrainerPage,
    PokemonListComponent,
    LandingPagePage,
    PokemonCataloguePage,
    ProfilePage,
    PokemonListItemComponent,
    LandingpageloginFormComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
