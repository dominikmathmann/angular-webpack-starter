import {style, animate, transition, state, trigger} from '@angular/core';

export default [
  trigger('fadeIn', [
    state('*', style({opacity: 1})),
    transition('void => *', [
      style({opacity: 0}),
      animate(1000)
    ]),
    transition('* => void', animate(0, style({opacity: 0})))
  ])
];