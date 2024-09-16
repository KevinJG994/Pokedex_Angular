import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../Services/pokemon.service';
import { Resultado } from '../../../interfaces/pokeapi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPokemon: Resultado[] = [];
  offset: number = 0;
  limit: number = 20;
  loading: boolean = false;
  selectedPokemonId: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista() {
    if (this.loading) return;
    this.loading = true;

    const newPokemons = await this.pokemonService.getByPage(this.limit, this.offset);
    this.listaPokemon = [...this.listaPokemon, ...newPokemons];
    this.offset += this.limit;
    this.loading = false;
  }

  onScroll(event: any) {
    const { scrollTop, scrollHeight, clientHeight } = event.target;


    if (scrollTop + clientHeight >= scrollHeight - 10) {
      this.cargarLista();
    }
  }

  onPokemonSelected(id: string) {
    this.selectedPokemonId = id; 
  }
}
