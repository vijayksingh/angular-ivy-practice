import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {
  constructor() {}
  public service = 'PokemonService';

  get serviceName() {
    return this.service;
  }
}
