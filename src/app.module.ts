import { NgModule, enableProdMode, ErrorHandler}      from '@angular/core';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppExceptionHandler }     from './services';

import {BusyModule, BusyConfig} from 'angular2-busy';
import {ToastyModule} from 'ng2-toasty';

import { AppComponent }  from './app.component';
import {HomeComponent} from './components'
import "./assets/css/app.css";


@NgModule({
    imports: [
        BrowserModule,
        ToastyModule.forRoot(),
        HttpModule,
        routing,
        BusyModule.forRoot(new BusyConfig())
    ],
    declarations: [AppComponent, HomeComponent],
    providers: [
        appRoutingProviders,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: ErrorHandler, useClass: AppExceptionHandler }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }