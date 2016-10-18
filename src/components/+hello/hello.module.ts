import { NgModule, enableProdMode}      from '@angular/core';
import { CommonModule}      from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { HttpModule }      from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService }     from '../../services';

import {BusyModule} from 'angular2-busy';
import {ToastyModule} from 'ng2-toasty';

import {HelloComponent} from '../'
import { routing } from './hello.routing';

const MODE = process.env.runtime;

var additionalImportElements: any[] = [];
var additionalProviderElements: any[] = [];

if (MODE == "development") {
    console.log("Running Application with DEV - Flag")
    additionalImportElements.push(InMemoryWebApiModule.forRoot(InMemHeroService, { rootPath: "api/", delay: 5000 }))
}
else {
    console.log("Running Application with PROD - Flag")
    enableProdMode();
}

@NgModule({
    imports: [
        CommonModule,
        ToastyModule.forRoot(),
        FormsModule,
        HttpModule,
        BusyModule,
        routing
    ].concat(additionalImportElements),
    declarations: [HelloComponent],
    providers: [ ],
    exports: [HelloComponent]
})
export class HelloModule { }