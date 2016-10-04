import {Component} from '@angular/core'
import {HelloWorldService} from '../../services/index'
import {ExampleModel} from '../../models/index'

@Component({
    template: require('./hello.component.html'),
    styles: [require('./hello.component.css')],
    selector: 'webpack-demo',
    providers: [HelloWorldService],
})
export class HelloComponent {
    constructor(service: HelloWorldService) {
        service.getHello().subscribe(hello => {
            this.title = hello.message + " " + hello.name;
        })

    }

    title: string
    showInfo = false;

}