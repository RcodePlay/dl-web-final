import { Component } from '@angular/core';

@Component({
    selector: 'app-oddiel1',
    standalone: true,
    imports: [],
    templateUrl: './oddiel1.component.html',
    styleUrl: './oddiel1.component.scss',
})
export class Oddiel1Component {
    divisionData = {
        name: 'Oddiel 1 name',
        description: 'Oddiel 1 description',
        leaders: 'Oddiel 1 leaders',
    };
}
