import { PokemonService } from './../../../Services/pokemon.service';
import { Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { Resultado } from '../../../interfaces/pokeapi';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnChanges {

  constructor(private pokemonService: PokemonService) {}

  @Input() data?: Resultado;
  @Output() pokemonSelected = new EventEmitter<string>();

  id: string = "0";

  ngOnChanges(): void {
    this.extraerNumero();
  }

  extraerNumero() {
    if (this.data) {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
      this.pokemonService.getById(this.id);
    }
  }

  onPokemonClick() {
    this.pokemonSelected.emit(this.id);
  }

}
