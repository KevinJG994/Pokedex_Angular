
import { Router } from '@angular/router';
import { PokemonService } from './../../../Services/pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private PokemonService: PokemonService, private router: Router) {}

  async onSearch() {
    if (this.searchQuery) {
      const idOrName = this.searchQuery.trim();
      this.router.navigate(['/pokemon', idOrName]);
    }
  }
}
