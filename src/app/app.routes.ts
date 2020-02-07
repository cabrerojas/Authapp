import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuardService } from './services/auth-guard.service';




const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    {
        path: 'protegida',
         component: ProtegidaComponent,
         canActivate: [ AuthGuardService ]
         },
    { path: '**', component: HomeComponent },

];


export const app_routing = RouterModule.forRoot(routes);
