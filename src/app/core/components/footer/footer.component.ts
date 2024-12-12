import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'navigation-footer',
  standalone: true,
  imports: [ TranslatePipe ],
  templateUrl: './footer.component.html',
  styles: `
    @import "../../styles/global.scss";
    @import "../../styles/buttons.scss";

    footer.footer {
      padding: 2rem 0;
      border-radius: 25px 25px 0 0;
      border: 2px solid transparent;

      transition: border-top .2s ease;

      &:hover {
        border-top: 2px solid var(--primary-300);
      }
    }
  `
})
export class FooterComponent {
  
}
