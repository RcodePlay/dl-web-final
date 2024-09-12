import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {
    activeDivision: number | null = null;

    divisions = [
        {
            name: '4. zbor Dzivé Labute',
            leader: 'Pavol Marcinčin',
            coleader: 'Adriána Čikotová',
            dateCreated: '2024',
            description: '',
        },
        {
            name: '1. oddiel Tajomná Džungľa',
            leader: 'Adriána Čikotová',
            coleader: 'Eliška Zámborská',
            dateCreated: '2024',
            description: '',
        },
        {
            name: '2. oddiel Ambystoma',
            leader: 'Gabriel Breza',
            coleader: 'Martin Šimčák',
            dateCreated: '2024',
            description: '',
        },
        {
            name: '7. oddiel Thestrali',
            leader: '',
            coleader: '',
            dateCreated: '2024',
            description: '',
        },
    ];

    toggleDivision(index: number) {
        if (this.activeDivision === index) {
            this.activeDivision = null; // Close the currently open division
        } else {
            this.activeDivision = index; // Open the selected division
        }
    }
}
