import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'game-control-component',
    template: `
        <div>Game Control component</div>
        <button type="button" class="btn btn-primary" (click)="startEmitter()" >Start Game</button>
        <button type="button" class="btn btn-warning" (click)="stopEmitter()">End Game</button>
        {{count}}
        `
})
export class GameControlComponent {
    public count = 0;
    private ref = null;
    
    @Output() onCountChanged = new EventEmitter();

    public changeCount() { 
        this.onCountChanged.emit(this.count);
    }

    public startEmitter() {
        if (this.ref === null) {
            this.count = 0;
            this.ref = setInterval(() => {
                this.count++;
                this.changeCount();
            }, 1000);
        }
    }

    public stopEmitter() {
        clearInterval(this.ref);
        this.ref = null;
    }


}