import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { SupportUsComponent } from './support-us/support-us.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: '4. zbor - Domov' },
    { path: 'about', component: AboutComponent, title: '4. zbor - O nás' },
    { path: 'events', component: EventsComponent, title: '4. zbor - Udalosti' },
    {
        path: 'support',
        component: SupportUsComponent,
        title: '4. zbor - Podporte nás',
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
