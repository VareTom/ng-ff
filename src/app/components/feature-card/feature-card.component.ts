import { Component, Input } from '@angular/core'
import { FeatureCardInput } from './feature-card-input.interface'

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.component.html'
})
export class FeatureCardComponent {
  @Input({required: true}) featureData!: FeatureCardInput
}
