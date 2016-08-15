import {Component} from '@angular/core'
import {HelloWorldService} from '../../services/index'
import {ExampleModel} from '../../models/index'

@Component({
    template: require('./helloworld.component.html'),
    styles: [require('./helloworld.component.css')],
    selector: 'webpack-demo',
    providers: [HelloWorldService]
})
export class HelloWorldComponent {
    constructor(service: HelloWorldService){
        var hello=service.getHello();
        this.title = hello.message + " " + hello.name;
    }
    
    title:string
    showInfo=false;
    
}