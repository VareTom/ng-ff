import { Component } from '@angular/core'
import { HeaderComponent } from './components/header/header.component'

import { features } from './data'
import { FeatureCardComponent } from './components/feature-card/feature-card.component'
import { FeatureCardInput } from './components/feature-card/feature-card-input.interface'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FeatureCardComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ng-ff'

  protected readonly features: FeatureCardInput[] = features
}
