"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var _ = require('lodash');
var route_animation_1 = require("../../../route.animation");
var GridListComponent = (function () {
    function GridListComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.gridListHTML = "\n  <md-grid-list cols=\"4\" rowHeight=\"100px\">\n    <md-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\n                  [style.background]=\"tile.color\">\n      {{tile.text}}\n    </md-grid-tile>\n  </md-grid-list>\n  ";
    }
    GridListComponent.prototype.ngOnInit = function () {
    };
    GridListComponent.prototype.getEscaped = function (text) {
        return _.escape(text);
    };
    GridListComponent = __decorate([
        core_1.Component({
            selector: 'ms-grid-list',
            templateUrl: './grid-list.component.html',
            styleUrls: ['./grid-list.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [route_animation_1.routeAnimation]
        })
    ], GridListComponent);
    return GridListComponent;
}());
exports.GridListComponent = GridListComponent;
