import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { map } from 'rxjs';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { TypewriterService } from '../../services/typewriter.service';

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
  private _titles: string[] = [ "_Erick", "_Solturne" ];
  private _subtitles: string[] = [ "_Angular", "_C#", "_.NET Framework", "_Fullstack" ];
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
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private typewriterService: TypewriterService,
    public translateService: TranslateService
  ) { }

  ngOnInit(): void { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
