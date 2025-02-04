import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { map } from 'rxjs';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { TypewriterService } from '../../services/typewriter.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    FontAwesomeModule,
    AsyncPipe,
    TranslatePipe,
    TooltipModule,
    RouterModule
  ],
  templateUrl: './inicio.component.html',
  styles: `
    @import "../../styles/global.scss";
    @import "../../styles/buttons.scss";
    @import "../../styles/animations.scss";
    @import "../../styles/media-queries.scss";

    #img-inicio-perfil {
      height: 28rem;
      width: 28rem;
    }
    img.img-inicio-perfil {
      display: none;
    }
    div.img-inicio-perfil {
      display: block;
    }

    .first-btns {
      a {
        transition: all .2s ease;
        // &:hover { border-color: var(--primary-300); }
        &:active { border-color: var(--primary-300); }
      }
    }
  `
})
export class InicioComponent {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  private _names: string[] = [ " Erick", " Solturne" ];
  private _specialties: string[] = [ " Angular", " C#", " Node.js", " Fullstack", " Frontend" ];
  // #endregion PRIVATE

  // #region PUBLIC
  public typedName$ = this.typewriterService
    .getTypewriterEffect(this._names)
    .pipe(map((text) => text));

  public typedSpecialty$ = this.typewriterService
    .getTypewriterEffect(this._specialties)
    .pipe(map((text) => text));


  public faLinkedIn = faLinkedin;
  public faGithub = faGithub;
  public faUpwork = faUpwork;
  public faEnvelope = faEnvelope;
  public faArrowDown = faArrowDown;
  public faArrowRight = faArrowRight;
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
