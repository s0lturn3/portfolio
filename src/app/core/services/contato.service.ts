import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, take, tap } from 'rxjs';

import { environment } from '../../../environments/environment';

import { ApiResponse } from '../models/ApiResponse.model';
import { ContatoFormModel } from '../models/ContatoForm.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private readonly _BASE_URL: string = `${ environment.nestAPI }/contato`;
  private readonly _HTTP_HEADERS = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  // #endregion PRIVATE

  // #endregion ==========> PROPERTIES <==========


  constructor( private _httpClient: HttpClient ) {
    this._BASE_URL = !environment.production ? this._BASE_URL : `${ environment.nestAPI }/contato`;
  }


  // #region ==========> SERVICE METHODS <==========

  // #region POST
  public sendEmail(record: ContatoFormModel): Observable<ApiResponse> {
    const headers = this._HTTP_HEADERS;

    const url = `${this._BASE_URL}/send`;
    
    return this._httpClient.post<ApiResponse>(url, record, { 'headers': headers })
      .pipe( take(1), tap(response => this.showErrorMessage(response)) );
  }

  public testGet(): Observable<ApiResponse> {
    const headers = this._HTTP_HEADERS;

    const url = `${this._BASE_URL}/get`;
    
    return this._httpClient.get<ApiResponse>(url, { 'headers': headers })
      .pipe( take(1), tap(response => this.showErrorMessage(response)) );
  }
  // #endregion POST

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  private showErrorMessage(response: ApiResponse): void { if (response.error) throw Error(response.errorMessage); }
  // #endregion ==========> UTILS <==========

}
