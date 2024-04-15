import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IMultiCharacterResponse } from '../../interfaces/multi-character';

@Injectable({
  providedIn: 'root'
})
export class GenshinApiService {
  // Properties
  private _apiUrl:string = "https://genshin.jmp.blue/characters";

  // Constructor
  constructor(private _http:HttpClient) { }

  // Methods
  public FetchAllCharacters():Observable<IMultiCharacterResponse> {
    return this._http.get<IMultiCharacterResponse>(this._apiUrl)
    .pipe(
      tap((data) => console.log('Response: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse) {
    console.log('Error: ' + error.message);
    return throwError(()=>new Error('Error: ' + error.message))
  }
}
