import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
    RouterLink,
    RouterLinkActive,
    RouterModule,
    RouterOutlet,
} from '@angular/router';
@Component({
    selector: 'app-about',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        RouterModule,
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {
    // it might be empty here, but it's doing it's job in the html file
}
