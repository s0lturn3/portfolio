import { Component } from '@angular/core';

@Component({
  selector: 'navigation-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: `
    @import "../../styles/global.scss";
    @import "../../styles/buttons.scss";

    .footer {

      .content {
        background-color: #201d20 !important;
      }
      .credits {
        background-color: var(--primary-500) !important;
      }
    }
  `
})
export class FooterComponent {

}
