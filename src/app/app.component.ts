import { Component, HostListener, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';

import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { InicioComponent } from "./core/views/inicio/inicio.component";
import { SobreMimComponent } from "./core/views/sobre-mim/sobre-mim.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { SkillsBarComponent } from "./core/components/skills-bar/skills-bar.component";
import { ServicosComponent } from "./core/views/servicos/servicos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    InicioComponent,
    SkillsBarComponent,
    SobreMimComponent,
    ServicosComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  // #region ==========> PROPERTIES <==========

  // #region PUBLIC
  @HostListener('document:visibilitychange', [])
  onVisibilityChange() {
    if (document.visibilityState === 'visible') {
      this.setTitle('Prazer, Solturne!');
    }
    else {
      this.setTitle('Precisa de um dev?');
    }
  }
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _meta: Meta,
    private _titleService: Title,
    private _translateService: TranslateService
  ) {
    this._translateService.addLangs(['pt-br', 'en']);
    this._translateService.setDefaultLang('pt-br');
    
    // Se não encontrar nenhum idioma já definido, define para português
    if (!this._translateService.currentLang) {
      if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', 'pt-br');
        this._translateService.use('pt-br');
      }
      else {
        this._translateService.use(localStorage.getItem('lang')!);
      }
    }
  }

  ngOnInit(): void {
    this._meta.updateTag({ name: 'description', content: 'Desenvolvedor fullstack especializado em Angular e .NET Framework' });
    this._meta.updateTag({ name: 'title', content: 'Solturne' });

    this._titleService.setTitle('Solturne');

    this._translateService.onLangChange.subscribe(lang => {
      localStorage.setItem('lang', lang.lang);
    });
  }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  setTitle(newTitle: string) {
    this._titleService.setTitle(newTitle);
  }
  // #endregion ==========> UTILS <==========

}
