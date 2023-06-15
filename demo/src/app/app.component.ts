import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PersonComponent } from './person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonComponent],
  template: `
  <h1>App</h1>

  <div *ngIf="toggle">
    <h2>Toggle</h2>
    <app-person [clearSelect]="clearSelect" (personChosenE)="onPersonSelected($event)"/>
    <div *ngIf="selectedPerson">
      <strong>selected:</strong>&nbsp;{{person}}
    </div>
  </div>  
  `,
  styles: [],
})
export class AppComponent {
  title = 'demo';
  toggle = false;
  clearSelect = false;
  selectedPerson = true;
  person = '';

  onPersonSelected(person: string): void {
    this.selectedPerson = true;
    this.person = person;
  }
}
