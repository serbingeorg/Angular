import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  id: number;
  name: string;
  color: string;
  year: string;
  hash: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.id = +this.route.snapshot.params['id'];
    // tslint:disable-next-line:no-string-literal
    this.name = this.route.snapshot.params['name'];
    // tslint:disable-next-line:no-string-literal
    this.color = this.route.snapshot.queryParams['color'];

    // tslint:disable-next-line:no-string-literal
    this.year = this.route.snapshot.queryParams['year'];
    this.hash = this.route.snapshot.fragment;

    this.route.params.subscribe((params: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.id = +params['id'];
      // tslint:disable-next-line:no-string-literal
      this.name = params['name'];
    });


    this.route.queryParams.subscribe((params: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.color = params['color'];
      // tslint:disable-next-line:no-string-literal
      this.year = params['year'];
    });
  }

  openMazdaPage() {
    this.router.navigate(['./cars', 8, 'Mazda'], {
      queryParams: {
        color: 'Pink',
        year: 1995
      },
      fragment: 'pic'
    });
  }

}
