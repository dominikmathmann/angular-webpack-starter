import { NgModule, enableProdMode}      from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import {HelloWorldComponent} from './components/helloworld/helloworld.component'
import "./assets/css/app.css";

const MODE = process.env.runtime;


if (MODE == "development") {
    console.log("Running Application with DEV - Flag")
}
else {
    console.log("Running Application with PROD - Flag")
    enableProdMode();
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [AppComponent, HelloWorldComponent],
    providers: [
        appRoutingProviders,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }