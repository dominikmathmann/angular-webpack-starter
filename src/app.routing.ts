import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components'

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
     { path: 'hello', loadChildren: './components/+hello/hello.module#HelloModule' },
     { path: 'animation', loadChildren: './components/+animation/animation.module#AnimationModule' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);