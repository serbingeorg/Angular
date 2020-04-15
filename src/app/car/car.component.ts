import {
  // tslint:disable-next-line:no-trailing-whitespace
  Component,
  Input,
  ContentChild,
  ElementRef,
  OnInit, OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  OnDestroy
} from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit,
  AfterContentChecked, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('carItem') car: { name: string, year: number };
  @Input() name: string;
  @ContentChild('carHeading') carHeading: ElementRef;


  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
