import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Homepage } from './features/homepage/homepage';
import { PerfilPage } from './features/PerfilPage/PerfilPage';
import { Proyectos } from './features/proyectos/proyectos';
import { Proyectos2 } from './features/proyectos2/proyectos2';

export const routes: Routes = [
    {
        path: "",
        component: Homepage,    
    },

    {
        path: 'perfil',
        component: PerfilPage,
    },

    {
        path: 'proyectos',
        component: Proyectos,
    },

    {
        path: 'proyectos2',
        component: Proyectos2,
    }
];
    