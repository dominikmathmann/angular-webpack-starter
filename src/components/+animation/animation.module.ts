import { NgModule}      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { CommonModule } from '@angular/common';
import { routing, appRoutingProviders } from './animation.routing';

import {BusyModule} from 'angular2-busy';
import {ToastyModule} from 'ng2-toasty';

import {AnimationComponent} from '../'

@NgModule({
    imports: [
        CommonModule,
        ToastyModule.forRoot(),
        FormsModule,
        HttpModule,
        BusyModule,
        routing
    ],
    declarations: [AnimationComponent],
    providers: []
})
export class AnimationModule { }