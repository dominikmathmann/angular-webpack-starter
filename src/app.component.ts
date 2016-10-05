import {Component} from '@angular/core'
import animations from './components/animations/animations'

@Component({
    template: require('./app.component.html'),
    selector: 'webpack-demo',
    animations: animations
})
export class AppComponent {
}