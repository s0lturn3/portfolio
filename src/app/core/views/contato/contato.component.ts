import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe } from '@ngx-translate/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { ContatoService } from '../../services/contato.service';
import { ContatoFormModel } from '../../models/ContatoForm.model';


type ProjectType = {
  nome: string,
  langCode: string,
  tooltip: string,
  isSelected: boolean
};

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    TranslatePipe,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
    TooltipModule,
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
// #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public contatoFormModel: ContatoFormModel = new ContatoFormModel();

  emailSent: boolean = false;

  faArrowLeft = faArrowLeft;
  faCheck = faCheck;

  projectCards: ProjectType[] = [
    { nome: 'UI/UX', langCode: 'UIUX', tooltip: 'UIUX-tooltip', isSelected: false },
    { nome: 'Web', langCode: 'WEB', tooltip: 'WEB-tooltip', isSelected: false },
    { nome: 'Mobile', langCode: 'MOBILE', tooltip: 'MOBILE-tooltip', isSelected: false },
    { nome: 'Desktop', langCode: 'DESKTOP', tooltip: 'DESKTOP-tooltip', isSelected: false },
    { nome: 'Research', langCode: 'RESEARCH', tooltip: 'RESEARCH-tooltip', isSelected: false },
    { nome: 'Other', langCode: 'OTHER', tooltip: 'OTHER-tooltip', isSelected: false },
  ];
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========

  // #region FORM FIELDS
  contactForm: FormGroup = new FormGroup({
    nome: new FormControl<string>("", [Validators.required]),
    sobrenome: new FormControl<string>("", [Validators.required]),
    email: new FormControl<string>("", [Validators.required]),
    necessidades: new FormControl<string[]>([]),
    descricao: new FormControl<string>("", [Validators.required])
  });
  // #endregion FORM FIELDS

  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> INITIALIZATION <==========
  constructor(
    private _contatoService: ContatoService
  ) { }

  ngOnInit(): void { }
  // #endregion ==========> INITIALIZATION <==========


  // #region ==========> SERVICE METHODS <==========

  // #region POST
  sendEmail(): void {

    if (this.contactForm.valid) {
      this.setNecessidades();
      const record: ContatoFormModel = this.contactForm.getRawValue() as ContatoFormModel;

      this._contatoService.sendEmail(record).subscribe({
        next: response => {
          this.emailSent = true;
          
          this.contactForm.reset();
          this.projectCards.forEach(proj => proj.isSelected = false );
          
          setTimeout(() => {
            this.emailSent = false;
          }, 3000);

          console.log(response);
        },
        error: error => {
          console.error(error.error.errorMessage);
        }
      });
    }
    else {
      console.log("Campos inválidos!");
    }
  }
  // #endregion POST

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILS <==========
  setProjectTypes(): string {
    let projectTypesString: string = "";

    projectTypesString = this.projectCards.filter(project => project.isSelected === true).map(proj => proj.nome).join(', ');
    return projectTypesString;
  }

  setNecessidades(): string[] {
    let necessidades: string[] = [];

    necessidades = this.projectCards.filter(project => project.isSelected === true).map(proj => proj.nome);
    this.contactForm.controls['necessidades'].setValue(necessidades);

    return necessidades;
  }
  // #endregion ==========> UTILS <==========

}
