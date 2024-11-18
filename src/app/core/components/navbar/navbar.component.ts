import { Component } from '@angular/core';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { LanguageService } from '../../services/language.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [ FontAwesomeModule, TranslatePipe ],
  templateUrl: './navbar.component.html',
  styles: `
    @import "../../styles/buttons.scss";
  `
})
export class NavbarComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  faLinkedIn = faLinkedin;
  faGithub = faGithub;
  faUpwork = faUpwork;
  faGlobe = faGlobe;
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _languageService: LanguageService,
    private _translateService: TranslateService
  ) { }

  ngOnInit(): void { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  changeLanguage(): void {
    this._languageService.changeLanguage();
    this._translateService.use(this._languageService.currentLanguage);
  }
  // #endregion ==========> UTILS <==========

}
