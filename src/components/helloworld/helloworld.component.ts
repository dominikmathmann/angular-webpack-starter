import {Component} from '@angular/core'

@Component({
    template: require('./helloworld.component.html'),
    styles: [require('./helloworld.component.css')],
    selector: 'webpack-demo',
})
export class HelloWorldComponent {
    title = "Hello World"
    showInfo=false;
    
}