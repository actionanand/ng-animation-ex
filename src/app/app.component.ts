import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { divStateAnimation, wildStateAnimation, list1Animation, list2Animation, fader, slider, 
  transformer, stepper, popOverAnimation } from './animation/app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // attach the 'flyInOut' animation to the host (root) element of this component
  // host: {
  //   '[@flyInOut]': 'true',
  //   'style': 'display: block;'
  // },
  animations: [
    divStateAnimation,
    wildStateAnimation(),
    list1Animation(),
    list2Animation(),
    fader,
    slider,
    transformer,
    stepper,
    popOverAnimation
  ]
})

export class AppComponent implements AfterViewInit{

  @ViewChild('input', { static: false }) inputvalue: ElementRef;

  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal'; // begining state of animation for 'divState'
  wildState = 'normal'; // begining state of animation for 'wildState'
  routerAnimation = 'FlyInAnimations';
  counter = 0;

  show = false;

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }

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

    prepareRoute(outlet: RouterOutlet) {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    onRouterAnimationChange() {
      this.counter++;
      if(this.counter > 3) {
        this.counter = 0;
      }

      switch(this.counter) {
        case 0: 
          this.routerAnimation = 'FlyInAnimations';
          break;
        case 1: 
          this.routerAnimation = 'SliderAnimations';
          break;
        case 2: 
          this.routerAnimation = 'TransformAnimations';
          break;
        case 3: 
          this.routerAnimation = 'StepperAnimations';
          break;
        default:
          this.routerAnimation = 'FlyInAnimations';
          break;
      }
    }
}
