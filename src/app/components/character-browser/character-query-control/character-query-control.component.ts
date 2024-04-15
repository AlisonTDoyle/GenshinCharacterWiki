import { Component } from '@angular/core';
import { GenshinApiService } from '../../../services/genshin-api/genshin-api.service';

@Component({
  selector: 'app-character-query-control',
  standalone: true,
  imports: [

  ],
  templateUrl: './character-query-control.component.html',
  styleUrl: './character-query-control.component.scss'
})
export class CharacterQueryControlComponent {
  // Inputs and outputs

  // Properties

  // Constructor
  constructor(private _genshinApiService:GenshinApiService) {

  }

  // Methods
  public SearchForCharacter() {
    this._genshinApiService.FetchAllCharacters().subscribe(
      characterData => {
        console.log(characterData);
      }
    )
    return false;
  }
}
