import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Homepage } from './features/homepage/homepage';
import { PerfilPage } from './features/PerfilPage/PerfilPage';

export const routes: Routes = [
    {
        path: "",
        component: Homepage,
    },

    {
        path: 'perfil',
        component: PerfilPage,
    }
];
