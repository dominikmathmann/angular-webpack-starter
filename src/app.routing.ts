import { Routes, RouterModule } from '@angular/router';
import {HomeComponent, AnimationComponent, HelloComponent} from './components'

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'hello', component: HelloComponent},
    { path: 'animation', component: AnimationComponent},
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);