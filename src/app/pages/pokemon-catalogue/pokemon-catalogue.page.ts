import { Component, Input, OnInit } from '@angular/core';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Dataservice } from 'src/data.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css']
})
export class PokemonCataloguePage implements OnInit {

  pokemons: any[] = [];
  page = 1;

  constructor(
    private dataservice: Dataservice
  ) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.dataservice.getPokemons(20, 20)
      .subscribe((response: any) => {

        response.results.forEach((result: { name: string; }) => {
          this.dataservice.getMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);

            })
        })

      })
  }
}
