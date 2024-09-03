import { Component } from '@angular/core';

@Component({
    selector: 'app-zbor',
    standalone: true,
    imports: [],
    templateUrl: './zbor.component.html',
    styleUrl: './zbor.component.scss',
})
export class ZborComponent {
    zborData = {
        name: '4. zbor Dzivé Labute',
        description: 'Basic description in <p> element',
        dateCreated: '2024',
        leaders: 'Pali Marcinčin',
    };
}
