import {style, animate, transition, state, trigger} from '@angular/core';

export default [
  trigger('fadeIn', [
    state('*', style({opacity: 1, height: '100%'})),
    transition('void => *', [
      style({opacity: 0, height: '100%'}),
      animate(1000)
    ]),
    transition('* => void', animate(0, style({opacity: 0, height: '100%'})))
  ])
];