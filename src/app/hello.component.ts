import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{serviceName}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  serviceName: string = '';
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.serviceName = this.pokemonService.serviceName;
  }
}
