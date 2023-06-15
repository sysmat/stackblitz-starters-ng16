import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>person</p>    
  `,
  styles: [],
})
export class PersonComponent {
  @Output() personChosenE = new EventEmitter<string>();
  @Input() clearSelect = false;
}
