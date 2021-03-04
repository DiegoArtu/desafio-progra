import { RouterModule, Routes } from "@angular/router";
import { DataComponent } from "./data/data.component";
import { LoginComponent } from "./login/login.component";


const  APP_ROUTES: Routes = [
    {path: 'account/login', component: LoginComponent},
    {path: 'account/data',component:DataComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'account/login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);