import { Component, Inject, Input, OnDestroy } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { DestroyService } from './destroy.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [DestroyService],
})
export class HelloComponent implements OnDestroy {
  @Input() name: string;

  constructor(
    @Inject(DestroyService) private readonly destroy$: ReplaySubject<void>,
  ) {}

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
