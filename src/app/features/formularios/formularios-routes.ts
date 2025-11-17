import { Routes } from "@angular/router";
import { FormularioPage } from "./formularioPage/formularioPage";
import { FormulariosDinamicos } from "./formularios-dinamicos/formularios-dinamicos";
import { FormularioMorePage } from "./formularioMorePage/formularioMorePage";

export const formulariosRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                title: 'Formularios Básicos',
                component: FormularioPage,
            },
            {
                path: 'dynamic',
                title: 'Formularios Dinámicos',
                component: FormulariosDinamicos,
            },
            {
                path: 'more',
                title: 'More',
                component: FormularioMorePage,
            },
            {
                path: '**',
                redirectTo: 'basic',
            },

        ],
    },
]