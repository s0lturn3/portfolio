import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [ FontAwesomeModule, TranslatePipe ],
  templateUrl: './sobre-mim.component.html',
  styles: `
    @import "../../styles/global.scss";
    @import "../../styles/buttons.scss";
    @import "../../styles/animations.scss";
    @import "../../styles/media-queries.scss";

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
    url_ptBR: "../../../../assets/documents/cv.pdf",
    url_ENG: "../../../../assets/documents/cv_eng.pdf",
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
