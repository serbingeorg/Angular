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
    color: string;
    year: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // tslint:disable-next-line:no-string-literal
        this.id = +this.route.snapshot.params['id'];
        // tslint:disable-next-line:no-string-literal
        this.name = this.route.snapshot.params['name'];
        // tslint:disable-next-line:no-string-literal
        this.color = this.route.snapshot.queryParams['color'];
        // tslint:disable-next-line:no-string-literal
        this.year = this.route.snapshot.queryParams['year'];

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

}
