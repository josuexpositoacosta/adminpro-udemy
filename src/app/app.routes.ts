import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './page/pages.component';

import { DashboardComponent } from './page/dashboard/dashboard.component';


import { ProgressComponent } from './page/progress/progress.component';
import { Graficas1Component } from './page/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


const appRoutes : Routes =[
    {path:  '',
     component: PagesComponent,
           children:[
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component:ProgressComponent  },
            {path: 'graficas1', component:Graficas1Component  },
            {path: '', redirectTo:'/dashboard', pathMatch:'full' }
           ]
     },         
    {path: 'login', component:LoginComponent  },
    {path: 'register', component:RegisterComponent  },   
    {path: '**',  component:NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});