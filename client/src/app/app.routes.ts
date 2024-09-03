import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { Oddiel1Component } from './about/oddiel1/oddiel1.component';
import { Oddiel2Component } from './about/oddiel2/oddiel2.component';
import { Oddiel3Component } from './about/oddiel3/oddiel3.component';
import { ZborComponent } from './about/zbor/zbor.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: '4. zbor - Domov' },
    { path: 'events', component: EventsComponent, title: '4. zbor - Udalosti' },
    {
        path: 'support',
        component: SupportUsComponent,
        title: '4. zbor - Podporte nás',
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    {
        path: 'about',
        component: AboutComponent,
        title: '4. zbor - O nás',
        children: [
            { path: 'zbor', component: ZborComponent },
            { path: 'oddiel1', component: Oddiel1Component },
            { path: 'oddiel2', component: Oddiel2Component },
            { path: 'oddiel3', component: Oddiel3Component },
            { path: 'about', redirectTo: '/zbor', pathMatch: 'full' },
        ],
    },
];
