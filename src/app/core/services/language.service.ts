import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _currentLanguage!: "pt-br" | "en";
  // #endregion PRIVATE

  // #region PUBLIC
  public get currentLanguage(): "pt-br" | "en" { return this._currentLanguage; }
  public set currentLanguage(value: "pt-br" | "en") {
    this._currentLanguage = value;
    localStorage.setItem('lang', value);
  }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  changeLanguage() {
    if (this.currentLanguage === "pt-br") this.currentLanguage = "en";
    else this.currentLanguage = "pt-br";

    localStorage.setItem('lang', this.currentLanguage);
    console.log(this.currentLanguage);
  }
  // #endregion ==========> UTILS <==========

}
