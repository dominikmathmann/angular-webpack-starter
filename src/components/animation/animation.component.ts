import {Component, AnimationTransitionEvent, ApplicationRef} from '@angular/core'
import {HelloWorldService} from '../../services/index'
import animations from '../animations/animations'

@Component({
    template: require('./animation.component.html'),
    styles: [require('./animation.component.css')],
    providers: [HelloWorldService],
    animations: animations
})
export class AnimationComponent {
    constructor(private app: ApplicationRef) {}
    
    show=false;
    show2=false;
    
    toggleShow(){
        this.show=!this.show;
    }
    
    toggleShow2(event:AnimationTransitionEvent){
        this.show2 = Boolean(event.toState)
        this.app.tick(); //trigger ui update
    }

}