import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ListComponent } from './list/list/list.component';
import { InfoPokemonComponent } from './infoPokemon/info-pokemon/info-pokemon.component';
import { ImagePokemonComponent } from './imagePokemon/image-pokemon/image-pokemon.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListComponent,
    InfoPokemonComponent,
    ImagePokemonComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListComponent,
    InfoPokemonComponent,
    ImagePokemonComponent,
  ]
})
export class ComponentsModule { }
