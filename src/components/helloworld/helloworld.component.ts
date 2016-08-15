import {Component} from '@angular/core'

@Component({
    template: "Hello: {{title}}",
    selector: 'webpack-demo',
})
export class HelloWorldComponent {
    title = "Hello World"
}