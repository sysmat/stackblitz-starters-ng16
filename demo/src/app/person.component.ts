import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      person works!
    </p>    
  `,
  styles: [],
})
export class PersonComponent {}
