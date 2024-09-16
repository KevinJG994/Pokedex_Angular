import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-pokemon',
  templateUrl: './image-pokemon.component.html',
  styleUrl: './image-pokemon.component.css'
})
export class ImagePokemonComponent {
  @Input() id: string = '';
}
