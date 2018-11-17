import { Component, Input } from '@angular/core'

@Component({
    selector: 'odd-component',
    template: `<p class="badge badge-secondary">Odd component: {{oddNumber}}</p>`
})
export class OddComponent {
    @Input('oddNumber') public oddNumber;
}