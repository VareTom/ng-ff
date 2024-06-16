import { Component } from '@angular/core'
import { HeaderComponent } from './components/header/header.component'

import { features } from './data'
import { CardInput } from './components/card/card-input.interface'
import { CardComponent } from './components/card/card.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ng-ff'

  protected readonly features: CardInput[] = features
}
