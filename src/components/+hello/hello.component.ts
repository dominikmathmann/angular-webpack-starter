import {Component} from '@angular/core'
import {HelloWorldService} from '../../services/index'
import {ExampleModel} from '../../models/index'
import {Subscription} from 'rxjs'

@Component({
    template: require('./hello.component.html'),
    styles: [require('./hello.component.css')],
    selector: 'webpack-demo',
    providers: [HelloWorldService],
})
export class HelloComponent {
    constructor(service: HelloWorldService) {
        this.serviceSubscripe = service.getHello().subscribe(hello => {
            this.title = hello.message + " " + hello.name;
        })

    }

    serviceSubscripe: Subscription;
    title: string;
    showInfo = false;

    showError() {
        let undef:any=undefined;
        
        undef.error();
    }

}