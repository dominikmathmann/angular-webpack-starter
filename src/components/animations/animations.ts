import {style, animate, transition, state, trigger} from '@angular/core';

export default [
    trigger("fadeIn", [
        transition("void => *", [
            style({ opacity: 0 }),
            animate('1s 2s ease'),
 
        ])
    ]),

    trigger("fadeInShown", [
        state("true", style({ opacity: 1 })),
        state("false", style({ opacity: 0 })),
        transition("* => 1", [
            style({ opacity: 0 }),
            animate('2s')
        ])
    ]),

    trigger('zoom', [
        transition('void => *', [
            style({ transform: 'scale(0)' }),
            animate("1s")
        ]),
    ]),

    trigger('movInLeft', [
        transition("void => *", [
            style({ transform: "translateX(-100%)" }),
            animate("2s")
        ])
    ]),
    
    trigger('moveInTop', [
        state("true", style({transform: "translateY(0%)", opacity: 1})),
        state("false", style({transform: "translateY(-500%)", opacity: 0})),
        transition("* => 1", [
            style({transform: "translateY(-50%)", opacity: 0}),
            animate("1s")
        ]),
        transition("1 => 0", [
            animate("1s ease")
        ])
    ])
]