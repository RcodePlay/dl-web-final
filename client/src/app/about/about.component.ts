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
            name: 'Zbor',
            leaders: 'Pavol Marcincin',
            dateCreated: '2024',
            description: '',
        },
        {
            name: 'Division 1',
            leaders: '',
            dateCreated: '2024',
            description: '',
        },
        {
            name: 'Division 2',
            leaders: '',
            dateCreated: '2024',
            description: '',
        },
        {
            name: 'Division 3',
            leaders: '',
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
