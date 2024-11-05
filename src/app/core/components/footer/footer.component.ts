import { Component } from '@angular/core';

@Component({
  selector: 'navigation-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: `
    @import "../../styles/global.scss";

    .footer {
      background-color: #201d20 !important;
    }
  `
})
export class FooterComponent {

}
