import { Component, OnInit } from "@angular/core";

import { EventData } from "@nativescript/core/data/observable";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls:["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    onBlur($event: EventData) {
        console.log("on blur", $event.eventName);
    }

    returnPress($event: EventData) {
        console.log("returnPress", $event.eventName);
    }

    onTextChange($event: EventData) {
        console.log("onTextChange", $event.eventName);
    }

    onFocus($event: EventData) {
        console.log("onFocus", $event.eventName);
    }
}
