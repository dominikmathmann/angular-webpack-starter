import {Component, Input, trigger, state, style, transition, animate} from '@angular/core'
import {HelloWorldService} from '../../services/index'
import animations from '../animations/animations'

@Component({
    template: require('./home.component.html'),
    styles: [require('./home.component.css')],
    selector: 'webpack-demo',
    providers: [HelloWorldService],
    animations: animations
})
export class HomeComponent {
    constructor(service: HelloWorldService) {
        service.getHello().subscribe(hello => {
            this.title = hello.message + " " + hello.name;
        })

    }
    title: string
    showInfo = false;

}