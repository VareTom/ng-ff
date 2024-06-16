import { Component, Input } from '@angular/core'
import { CardInput } from './card-input.interface'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input({required: true}) data!: CardInput
}
