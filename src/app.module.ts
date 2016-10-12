import { NgModule, enableProdMode, ErrorHandler, forwardRef}      from '@angular/core';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService, AppExceptionHandler }     from './services';

import {BusyModule} from 'angular2-busy';
import {ToastyModule} from 'ng2-toasty';

import { AppComponent }  from './app.component';
import {HomeComponent, AnimationComponent, HelloComponent} from './components'
import "./assets/css/app.css";

const MODE = process.env.runtime;

var additionalImportElements: any[] = [];
var additionalProviderElements: any[] = [];

if (MODE == "development") {
    console.log("Running Application with DEV - Flag")
    additionalImportElements.push(InMemoryWebApiModule.forRoot(InMemHeroService, { rootPath: "api/", delay: 2000 }))
}
else {
    console.log("Running Application with PROD - Flag")
    enableProdMode();
}

@NgModule({
    imports: [
        BrowserModule,
        ToastyModule.forRoot(),
        FormsModule,
        HttpModule,
        routing,
        BusyModule,
    ].concat(additionalImportElements),
    declarations: [AppComponent, HomeComponent, HelloComponent, AnimationComponent],
    providers: [
        appRoutingProviders,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: ErrorHandler, useClass: AppExceptionHandler }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }