import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICharacterName, IMultiCharacterResponse } from '../../interfaces/multi-character-response';
import { ICharacterCard } from '../../interfaces/character-card';

@Injectable({
  providedIn: 'root'
})
export class GenshinApiService {
  // Properties
  private _apiUrl:string = "https://genshin.jmp.blue/characters/";

  // Constructor
  constructor(private _http:HttpClient) { }

  // Methods
  public async FetchAllCharacters() {
    this.FetchChatacterNames().subscribe((characterNames) => {
      for (let i = 0; i < characterNames.length; i++) {
        this.FetchCharacterCardDetails(characterNames[i]).subscribe();
      }
    });
  }

  public FetchChatacterNames() {
    return this._http.get<ICharacterName[]>(this._apiUrl)
    .pipe(
      // tap((data) => console.log(data))
    );
  }

  private FetchCharacterCardDetails(characterName:ICharacterName) {
    return this._http.get<ICharacterCard>(this._apiUrl + characterName)
    .pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse) {
    console.log('Error: ' + error.message);
    return throwError(()=>new Error('Error: ' + error.message))
  }
}
