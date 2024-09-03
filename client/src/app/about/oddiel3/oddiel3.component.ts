import { Component } from '@angular/core';

@Component({
    selector: 'app-oddiel3',
    standalone: true,
    imports: [],
    templateUrl: './oddiel3.component.html',
    styleUrl: './oddiel3.component.scss',
})
export class Oddiel3Component {
    divisionData = {
        name: 'Oddiel 3 name',
        description: 'Oddiel 3 description',
        leaders: 'Oddiel 3 leaders',
    };
}
