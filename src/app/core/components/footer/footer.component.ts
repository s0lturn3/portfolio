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
    @import "../../styles/animations.scss";
    @import "../../styles/media-queries.scss";

    footer.footer {
      padding: 2rem 0;

      p {
        color: var(--light-300) !important;
      }
    }
  `
})
export class FooterComponent {
  
}
