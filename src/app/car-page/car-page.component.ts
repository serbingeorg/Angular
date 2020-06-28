import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  id: number;
  name: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.id = +this.route.snapshot.params['id'];
    // tslint:disable-next-line:no-string-literal
    this.name = this.route.snapshot.params['name'];

    this.route.params.subscribe((params: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.id = +params['id'];
      // tslint:disable-next-line:no-string-literal
      this.name = params['name'];
    });
  }

}
