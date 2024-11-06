import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { InicioComponent } from "./core/views/inicio/inicio.component";
import { SobreMimComponent } from "./core/views/sobre-mim/sobre-mim.component";
import { ExperienciaComponent } from "./core/views/experiencia/experiencia.component";
import { ProjetosComponent } from "./core/views/projetos/projetos.component";
import { FooterComponent } from "./core/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    InicioComponent,
    SobreMimComponent,
    ExperienciaComponent,
    ProjetosComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  // [...]
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> INITIALIZATION <==========
  constructor() { }

  ngOnInit(): void { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> UTILS <==========
  // [...]
  // #endregion ==========> UTILS <==========

}
