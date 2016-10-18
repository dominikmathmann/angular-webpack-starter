import {Component, Input, trigger, state, style, transition, animate} from '@angular/core'
import animations from '../animations/animations'

@Component({
    template: require('./home.component.html'),
    styles: [require('./home.component.css')],
    selector: 'webpack-demo',
    providers: [],
    animations: animations
})
export class HomeComponent {
}