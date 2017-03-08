"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var route_animation_1 = require("../../../route.animation");
var SimpleTableComponent = (function () {
    function SimpleTableComponent() {
        this.tableHover = true;
    }
    SimpleTableComponent.prototype.ngOnInit = function () {
        this.rows = [
            {
                "name": {
                    "first": "Debora",
                    "last": "Castro"
                },
                "picture": "assets/img/avatars/15.png",
                "company": "SIGNIDYNE",
                "email": "debora.castro@signidyne.ca",
                "phone": "+1 (979) 427-3700",
                "balance": "$1,743.04"
            },
            {
                "name": {
                    "first": "Warren",
                    "last": "Gallegos"
                },
                "picture": "assets/img/avatars/8.png",
                "company": "XSPORTS",
                "email": "warren.gallegos@xsports.biz",
                "phone": "+1 (964) 433-3008",
                "balance": "$1,122.90"
            },
            {
                "name": {
                    "first": "Gordon",
                    "last": "Sloan"
                },
                "picture": "assets/img/avatars/17.png",
                "company": "FUTURIS",
                "email": "gordon.sloan@futuris.com",
                "phone": "+1 (904) 572-2860",
                "balance": "$1,505.24"
            },
            {
                "name": {
                    "first": "Nettie",
                    "last": "Hoover"
                },
                "picture": "assets/img/avatars/5.png",
                "company": "UNEEQ",
                "email": "nettie.hoover@uneeq.us",
                "phone": "+1 (943) 579-2855",
                "balance": "$2,206.32"
            },
            {
                "name": {
                    "first": "Bartlett",
                    "last": "Kramer"
                },
                "picture": "assets/img/avatars/13.png",
                "company": "MIXERS",
                "email": "bartlett.kramer@mixers.co.uk",
                "phone": "+1 (897) 410-2327",
                "balance": "$1,220.73"
            },
            {
                "name": {
                    "first": "Martina",
                    "last": "Barnes"
                },
                "picture": "assets/img/avatars/17.png",
                "company": "VERAQ",
                "email": "martina.barnes@veraq.biz",
                "phone": "+1 (917) 535-3821",
                "balance": "$1,236.69"
            },
            {
                "name": {
                    "first": "Vasquez",
                    "last": "Pugh"
                },
                "picture": "assets/img/avatars/8.png",
                "company": "MOMENTIA",
                "email": "vasquez.pugh@momentia.net",
                "phone": "+1 (903) 505-2458",
                "balance": "$1,734.39"
            },
            {
                "name": {
                    "first": "Moran",
                    "last": "Burris"
                },
                "picture": "assets/img/avatars/9.png",
                "company": "ZOLAVO",
                "email": "moran.burris@zolavo.org",
                "phone": "+1 (985) 531-3293",
                "balance": "$2,320.01"
            },
            {
                "name": {
                    "first": "Kayla",
                    "last": "Langley"
                },
                "picture": "assets/img/avatars/6.png",
                "company": "ELECTONIC",
                "email": "kayla.langley@electonic.tv",
                "phone": "+1 (901) 473-2752",
                "balance": "$2,600.99"
            },
            {
                "name": {
                    "first": "Hutchinson",
                    "last": "Golden"
                },
                "picture": "assets/img/avatars/4.png",
                "company": "CEDWARD",
                "email": "hutchinson.golden@cedward.name",
                "phone": "+1 (906) 540-2818",
                "balance": "$3,077.00"
            },
            {
                "name": {
                    "first": "Cherry",
                    "last": "Pollard"
                },
                "picture": "assets/img/avatars/6.png",
                "company": "ZOXY",
                "email": "cherry.pollard@zoxy.io",
                "phone": "+1 (962) 591-3338",
                "balance": "$2,528.52"
            },
            {
                "name": {
                    "first": "Samantha",
                    "last": "Flowers"
                },
                "picture": "assets/img/avatars/4.png",
                "company": "COMTOUR",
                "email": "samantha.flowers@comtour.me",
                "phone": "+1 (948) 513-3422",
                "balance": "$3,517.51"
            }
        ];
    };
    SimpleTableComponent = __decorate([
        core_1.Component({
            selector: 'ms-simple-table',
            templateUrl: './simple-table.component.html',
            styleUrls: ['./simple-table.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [route_animation_1.routeAnimation]
        })
    ], SimpleTableComponent);
    return SimpleTableComponent;
}());
exports.SimpleTableComponent = SimpleTableComponent;
