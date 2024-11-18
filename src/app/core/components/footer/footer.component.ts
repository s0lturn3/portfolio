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
  `
})
export class FooterComponent {
  
}
