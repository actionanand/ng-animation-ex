import { Component } from '@angular/core';
import { trigger , state , style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),  
      state('highlighted', style({
        backgroundColor: 'green',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(700))
    ])
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';

    onAdd(item: string) {
      this.list.push(item);
    }

    onAnimate() {
      this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    }
}
