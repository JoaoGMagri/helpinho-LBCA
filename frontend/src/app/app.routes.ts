import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewHelpComponent } from './pages/new-help/new-help.component';

export const routes: Routes = [
    { path: '', component: HomeComponent     },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'new-help', component: NewHelpComponent},
];
