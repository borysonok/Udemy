import { Component, Input } from '@angular/core'

@Component({
    selector: 'even-component',
    template: "<p>Even component: {{evenNumber}}</p>",
})
export class EvenComponent {
    @Input('evenNumber') public evenNumber;
}