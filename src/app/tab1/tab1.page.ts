import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonCheckbox } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonCheckbox, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  @ViewChild('checkbox', { static: true }) checkbox!: ElementRef;
  constructor() { }

  keyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.checkbox.nativeElement.focus();
      console.log('focus');
    } else {
      console.log(event.key);
    }
  }
}
