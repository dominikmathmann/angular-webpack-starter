import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import "style-loader!./assets/css/app.css";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        appRoutingProviders
    ],
})
export class AppModule { }