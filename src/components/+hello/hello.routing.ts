import { Routes, RouterModule } from '@angular/router';
import {HelloComponent} from '../'

const appRoutes: Routes = [
    { path: '', component: HelloComponent}
];

export const routing = RouterModule.forChild(appRoutes);