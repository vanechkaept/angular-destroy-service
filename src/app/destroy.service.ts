import { Injectable, OnDestroy } from "@angular/core";
import { ReplaySubject } from "rxjs/internal/ReplaySubject";

@Injectable()
export class DestroyService extends ReplaySubject<void> implements OnDestroy {
    constructor() {
        super(1);
    }

    ngOnDestroy(): void {
         console.log('DestroyService');
        this.next();
        this.complete();
    }
}