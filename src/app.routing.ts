import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {HelloComponent} from './components/hello/hello.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'hello', component: HelloComponent},
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);