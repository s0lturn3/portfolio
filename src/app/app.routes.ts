import { Routes } from '@angular/router';
import { ContatoComponent } from './core/views/contato/contato.component';
import { PerfilComponent } from './core/views/perfil/perfil.component';

export const routes: Routes = [
  { path: '', component: PerfilComponent },
  { path: 'contact', component: ContatoComponent },

  // { path: 'resume', component: ContatoComponent },
  // { path: 'blog', component: ContatoComponent },
];
