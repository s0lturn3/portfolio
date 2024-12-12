import { Component } from '@angular/core';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navigation-header',
  standalone: true,
  imports: [
    FontAwesomeModule,
    TranslatePipe,
    TooltipModule
  ],
  templateUrl: './navbar.component.html',
  styles: `
    @import "../../styles/buttons.scss";
    @import "../../styles/media-queries.scss";
  `
})
export class NavbarComponent {

  // #region ==========> PROPERTIES <==========

  // #region PUBLIC
  faLinkedIn = faLinkedin;
  faGithub = faGithub;
  faUpwork = faUpwork;
  faGlobe = faGlobe;
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _translateService: TranslateService
  ) { }

  ngOnInit(): void { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  changeLanguage(): void {
    if (localStorage.getItem('lang') === 'pt-br') this._translateService.use('en');
    else this._translateService.use('pt-br');
  }
  // #endregion ==========> UTILS <==========

}
