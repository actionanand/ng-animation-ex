import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { divStateAnimation, wildStateAnimation, list1Animation, list2Animation } from './animation/app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    divStateAnimation(),
    wildStateAnimation(),
    list1Animation(),
    list2Animation()
  ]
})

export class AppComponent implements AfterViewInit{

  @ViewChild('input', { static: false }) inputvalue: ElementRef;

  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal'; // begining state of animation for 'divState'
  wildState = 'normal'; // begining state of animation for 'wildState'

  ngAfterViewInit(): void {
    // console.log(this.inputvalue.nativeElement.value);
  }

    onAdd(item: string) {
      this.list.unshift(item);
      console.log(this.inputvalue.nativeElement.value);
      this.inputvalue.nativeElement.value = ''
    }

    onDelete(item) {
      this.list = this.list.filter(it => it !== item);
    }

    onAnimate() {
      this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    }

    onShrink() {
      this.wildState = 'shrunken';
    }

    animationStarted(event) {
      console.log(event);
    }

    animationFinished(event) {
      console.log(event);
    }
}
