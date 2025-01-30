import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [ FontAwesomeModule, TranslatePipe, TooltipModule ],
  templateUrl: './sobre-mim.component.html',
  styles: `
    @import "../../styles/global.scss";
    @import "../../styles/buttons.scss";
    @import "../../styles/animations.scss";
    @import "../../styles/media-queries.scss";

    .about-content {
      padding: 5rem 0;
    }

    #about-me-img {
      height: 25rem;
      width: 25rem;
      border-radius: 50%;
    }

    .cv-btn {
      width: fit-content;
    }
  `
})
export class SobreMimComponent {

  // #region ==========> PROPERTIES <==========

  // #region PUBLIC
  public faArrowDown = faArrowDown;
  
  public download = {
    url_ptBR: "/assets/documents/erick_cv.pdf",
    url_ENG: "/assets/documents/erick_cv_ENG.pdf",
    filename: "erick-cv.pdf"
  };
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    public translateService: TranslateService
  ) { }

  ngOnInit(): void { }
  // #endregion ==========> INITIALIZATION <==========

}
