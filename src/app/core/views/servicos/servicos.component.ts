import { faCode, faDisplay, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [ FontAwesomeModule, TranslatePipe ],
  templateUrl: './servicos.component.html',
  styles: `
    @import "../../styles/global.scss";
    @import "../../styles/buttons.scss";
    @import "../../styles/animations.scss";
    @import "../../styles/media-queries.scss";

    .card {
      color: var(--light-100);
      transition: all .2s ease;
      // width: 100%;

      &:hover { border: solid 1px var(--primary-300); }

      .card-image { padding: 2rem; }
    }

    .contact-btn { width: fit-content; }
  `
})
export class ServicosComponent {
  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  faDisplay = faDisplay;
  faCode = faCode;
  faGlobe = faGlobe;
  faAngular = faAngular;

  faEnvelope = faEnvelope;
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }

  ngOnInit(): void { }
  // #endregion ==========> INITIALIZATION <==========

}
