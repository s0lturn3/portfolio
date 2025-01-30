import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SkillsBarComponent } from '../../components/skills-bar/skills-bar.component';
import { InicioComponent } from '../inicio/inicio.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { SobreMimComponent } from '../sobre-mim/sobre-mim.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    NavbarComponent,
    InicioComponent,
    SkillsBarComponent,
    SobreMimComponent,
    ServicosComponent,
    FooterComponent,
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

}
