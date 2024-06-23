import { Routes } from '@angular/router';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {path: "pregunta2", component:Pregunta2Component},
    {path: "login", component:LoginComponent}
];
