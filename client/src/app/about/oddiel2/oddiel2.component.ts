import { Component } from '@angular/core';

@Component({
    selector: 'app-oddiel2',
    standalone: true,
    imports: [],
    templateUrl: './oddiel2.component.html',
    styleUrl: './oddiel2.component.scss',
})
export class Oddiel2Component {
    divisionData = {
        name: 'Oddiel 2 name',
        description: 'Oddiel 2 desription',
        leaders: 'Oddiel 2 leaders',
    };
}
