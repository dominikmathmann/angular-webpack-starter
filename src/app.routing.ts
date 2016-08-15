import { Routes, RouterModule } from '@angular/router';
import {HelloWorldComponent} from './components/helloworld/helloworld.component'

const appRoutes: Routes = [
    { path: '', component: HelloWorldComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);