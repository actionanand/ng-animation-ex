import { trigger , state , style, transition, animate, keyframes, group, query } from '@angular/animations';

// export the various triggers as constants or functions :)

export const divStateAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
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
  ]);


export function wildStateAnimation() {
  return trigger('wildState', [
    state('normal', style({
      'background-color': 'red',
      transform: 'translateX(0) scale(1)'
    })),  
    state('highlighted', style({
      backgroundColor: 'green',
      transform: 'translateX(100px) scale(1)'
    })),
    state('shrunken', style({
      backgroundColor: 'blue',
      transform: 'translateX(0) scale(0.5)'
    })),
    transition('normal <=> highlighted', animate(600)),
    transition('shrunken <=> *', [
      style({
        'background-color': 'orange'
      }),
      animate(1000, style({
        borderRadius: '50px'
      }))
    ])  
  ]);
}

export function list1Animation() {
  return trigger('list1', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),  
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100px)'
      }),
      animate(300)
    ]),
    transition('* => void', [
      animate(300, style({
        transform: 'translateX(100px)',
        opacity: 0
      }))
    ])
  ]);
}

export function list2Animation() {
  return trigger('list2', [
    state('in', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),  
    transition('void => *', [
      animate(1000, keyframes([
        style({
          transform: 'translateX(-100px)',
          opacity: 0,
          offset: 0
        }),
        style({
          transform: 'translateX(-50px)',
          opacity: 0.5,
          offset: 0.3
        }),
        style({
          transform: 'translateX(-20px)',
          opacity: 1,
          offset: 0.8
        }),
        style({
          transform: 'translateX(0)',
          opacity: 1,
          offset: 1
        })
      ]))
    ]),
    transition('* => void', [
      group([
        animate(300, style({
          color: 'red'
        })),
        animate(800, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]);
}

export function flyInOut() {
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  return trigger('flyInOut', [
    state('*', style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    // route 'enter' transition
    transition(':enter', [
      // css styles at start of transition
      style({
        transform: 'translateX(-100%)',
        opacity: 0
      }),
      animate('500ms ease-in')
    ]),
    transition(':leave', [
      // animation and styles at end of transition
      animate('500ms ease-in', style({
        transform: 'translateX(100%)',
        opacity: 0
      }))
    ])
  ]);
}

  // The query function has three params.
  // First is the event, so this will apply on entering or when the element is added to the DOM.
  // Second is a list of styles or animations to apply.
  // Third we add a config object with optional set to true, this is to signal
  // angular that the animation may not apply as it may or may not be in the DOM.

  export const fader =
  trigger('myFlyInRouteAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ], { optional: true }),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ], { optional: true })
    ]),
]);


export const slider =
  trigger('mySliderRouteAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') )
  ]);

  function slideTo(direction: string) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ [direction]: '-100%'})
      ], optional),
      group([
        query(':leave', [
          animate('600ms ease', style({ [direction]: '100%'}))
        ], optional),
        query(':enter', [
          animate('600ms ease', style({ [direction]: '0%'}))
        ], optional)
      ]),
      // Normalize the page style... Might not be necessary
  
      // Required only if you have child animations on the page
      // query(':leave', animateChild()),
      // query(':enter', animateChild()),
    ];
  }

  export const transformer =
  trigger('myTransformRouteAnimations', [
    transition('* => isLeft', transformTo({ x: -100, y: -100, rotate: -720 }) ),
    transition('* => isRight', transformTo({ x: 100, y: -100, rotate: 90 }) ),
    transition('isRight => *', transformTo({ x: -100, y: -100, rotate: 360 }) ),
    transition('isLeft => *', transformTo({ x: 100, y: -100, rotate: -360 }) )
  ]);


  function transformTo({x = 100, y = 0, rotate = 0}) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`})
      ], optional),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`}))
        ], optional),
        query(':enter', [
          animate('600ms ease-out', style({ transform: `translate(0, 0) rotate(0)`}))
        ], optional)
      ]),
    ];
  }

  export const stepper =
  trigger('myStepperRouteAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
        }),
      ], { optional: true }),
      group([
        query(':enter', [
          animate('2000ms ease', keyframes([
            style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
            style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
            style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
          ])),
        ], { optional: true }),
        query(':leave', [
          animate('2000ms ease', keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
            style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
          ])),
        ], { optional: true })
      ]),
    ])
]);

export const popOverAnimation =
trigger('popOverAni', [
  state('show', style({
    opacity: 1
  })),
  state('hide', style({
    opacity: 0
  })),
  transition('show => hide', animate('600ms ease-out')),
  transition('hide => show', animate('1000ms ease-in'))
]);