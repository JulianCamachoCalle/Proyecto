import { Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {path: 'crisis', component: CrisisListComponent},
    {path: 'heroes', component: HeroesListComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent}
    
];
