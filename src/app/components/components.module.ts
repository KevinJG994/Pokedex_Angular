import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ListComponent } from './list/list/list.component';
import { ImagePokemonComponent } from './imagePokemon/image-pokemon/image-pokemon.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListComponent,
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
    ImagePokemonComponent,
  ]
})
export class ComponentsModule { }
