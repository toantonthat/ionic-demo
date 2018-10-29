import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

    items: Array<any>;
    constructor(
        private router: Router,
    ) { }
    ngOnInit() {
    }
}
