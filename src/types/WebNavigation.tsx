import type {ComponentType} from 'react';

import HomePage from "../pages/HomePage.tsx";
import ProjectCardsPage from "../pages/ProjectCardsPage.tsx";
import ProjectPage from "../pages/ProjectPage.tsx";
import CareerPage from "../pages/CareerPage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";

interface NavRoute {
    path: string;
    component: ComponentType;
    label?: string;  // optional
}

export const PageRoutes: NavRoute[] = [
    {path: '/', label: 'Home', component: HomePage},
    {path: '/projects', label: 'Projects', component: ProjectCardsPage},
    {path: '/career', label: 'Career', component: CareerPage},
    {path: '/about', label: 'About', component: AboutPage},
    {path: '/contact', label: 'Contact', component: ContactPage},
];

export const HiddenRoutes: NavRoute[] = [
    {path: '/projects/:id', component: ProjectPage},
];