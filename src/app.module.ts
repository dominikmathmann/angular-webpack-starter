import { NgModule, enableProdMode}      from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService }     from './services/InMemoryService';


import { AppComponent }  from './app.component';
import {HomeComponent} from './components/home/home.component'
import {HelloComponent} from './components/hello/hello.component'
import "./assets/css/app.css";

const MODE = process.env.runtime;

var additionalImportElements: any[] = [];
var additionalProviderElements: any[] = [];

if (MODE == "development") {
    console.log("Running Application with DEV - Flag")
    additionalImportElements.push(InMemoryWebApiModule.forRoot(InMemHeroService, { rootPath: "api/"}))
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
    ].concat(additionalImportElements),
    declarations: [AppComponent, HomeComponent, HelloComponent],
    providers: [
        appRoutingProviders,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }