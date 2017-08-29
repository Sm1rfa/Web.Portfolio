import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:'app-contact',
    templateUrl:'./contact.component.html',
    styleUrls: [ './contact.component.css' ]
})

export class ContactComponent implements OnInit {

    imagePath: string;
    clickMessage = '';

    constructor() {
        this.imagePath = '/assets/images/email.png';
    }

    onClickMe() {
        this.clickMessage = "You are my hero!";
    }

    ngOnInit(){}
}