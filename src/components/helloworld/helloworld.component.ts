import {Component} from '@angular/core'

@Component({
    template: require('./helloworld.component.html'),
    selector: 'webpack-demo',
})
export class HelloWorldComponent {
    title = "Hello World"
}