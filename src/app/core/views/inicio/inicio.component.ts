import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TypewriterService } from '../../services/typewriter.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ FontAwesomeModule, AsyncPipe, TranslatePipe ],
  templateUrl: './inicio.component.html',
  styles: `
    @import "../../styles/global.scss";
    @import "../../styles/buttons.scss";
    @import "../../styles/animations.scss";
    @import "../../styles/media-queries.scss";

  `
})
export class InicioComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _titles: string[] = [ "Erick_", "Solturne_" ];
  private _subtitles: string[] = [ "Angular_", "C#_", ".NET Framework_", "Fullstack_" ];
  // #endregion PRIVATE

  // #region PUBLIC
  public typedTitle$ = this.typewriterService
    .getTypewriterEffect(this._titles)
    .pipe(map((text) => text));

  public typedSubtitle$ = this.typewriterService
    .getTypewriterEffect(this._subtitles)
    .pipe(map((text) => text));


  public faLinkedIn = faLinkedin;
  public faGithub = faGithub;
  public faUpwork = faUpwork;
  public faEnvelope = faEnvelope;
  public faArrowDown = faArrowDown;

  public download = {
    url_ptBR: "../../../../assets/documents/cv.pdf",
    url_ENG: "../../../../assets/documents/cv_eng.pdf.pdf",
    filename: "erick-cv.pdf"
  };
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private typewriterService: TypewriterService,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
