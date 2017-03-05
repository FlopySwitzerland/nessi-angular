import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';


const appRoutes: Routes = [
//  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
