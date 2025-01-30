import { Component, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // #region ==========> PROPERTIES <==========
    
    // #region PUBLIC
    public currentUrl!: string;
  
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
      private _translateService: TranslateService,
      private _router: Router
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
      this.currentUrl = this._router.url;
  
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
