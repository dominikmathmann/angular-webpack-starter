import {Component, Input, trigger, state, style, transition, animate} from '@angular/core'
import {HelloWorldService} from '../../services/index'
import {ExampleModel} from '../../models/index'

@Component({
    template: require('./home.component.html'),
    styles: [require('./home.component.css')],
    selector: 'webpack-demo',
    providers: [HelloWorldService],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateY(0)' })),
            transition('void => *', [
                style({ transform: 'translateY(-20%)' }),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({ transform: 'translateY(20%)' }))
            ])
        ])
    ]
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