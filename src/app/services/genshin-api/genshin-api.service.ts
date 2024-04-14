import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenshinApiService {
  // Properties
  private _apiUrl:string = "https://genshin.jmp.blue/characters";

  // Constructor
  constructor() { }

  // Methods
  public FetchAllCharacters() {
    
  }
}
