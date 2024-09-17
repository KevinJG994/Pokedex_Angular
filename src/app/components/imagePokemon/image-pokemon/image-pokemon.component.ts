import { PokemonService } from './../../../Services/pokemon.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-pokemon',
  templateUrl: './image-pokemon.component.html',
  styleUrl: './image-pokemon.component.css'
})
export class ImagePokemonComponent {
  @Input() id: string = '';

  description: string = '';
  types: string[] = [];

  constructor(private PokemonService: PokemonService) {}

  ngOnChanges(): void {
    if (this.id) {
      this.loadPokemonData();
    }
  }

  async loadPokemonData() {
    this.description = await this.PokemonService.getDescription(this.id);
    this.types = await this.PokemonService.getTipos(this.id);
  }
}
