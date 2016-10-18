import { Routes, RouterModule } from '@angular/router';
import {AnimationComponent} from '../'

const appRoutes: Routes = [
    { path: '', component: AnimationComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forChild(appRoutes);