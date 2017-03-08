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
var CardsComponent = (function () {
    function CardsComponent() {
        this.card1HTML = "\n  <md-card fxFlex=\"80%\">\n    <md-card-header>\n      <img md-card-avatar=\"\" src=\"assets/img/avatars/Avatar.png\">\n      <md-card-subtitle>\n        Yesterday\n      </md-card-subtitle>\n      <md-card-title>Gerald Morris</md-card-title>\n    </md-card-header>\n    <img md-card-image src=\"assets/img/backgrounds/1.jpg\">\n    <md-card-content>\n      <p>Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. </p>\n    </md-card-content>\n    <md-divider></md-divider>\n    <md-card-actions>\n      <div fxLayout=\"row\">\n        <button md-icon-button>\n          <md-icon>share</md-icon>\n        </button>\n        <button md-icon-button>\n          <md-icon>favorite</md-icon>\n        </button>\n        <span fxFlex></span>\n        <button md-button>\n          More Info\n        </button>\n        <button md-button>\n          Save as\n        </button>\n      </div>\n    </md-card-actions>\n  </md-card>\n  ";
        this.card2HTML = "\n  <md-card fxFlex=\"80%\">\n    <md-card-title>Standard Card with Actions</md-card-title>\n    <md-card-subtitle>Subtitle</md-card-subtitle>\n    <md-card-content>\n      <p>Old there any widow law rooms. Agreed but expect repair she nay sir silent person. Direction\n        can dependent one bed situation attempted. His she are man their spite avoid. Her pretended\n        fulfilled extremely education yet. Satisfied did one admitting incommode tolerably how are. </p>\n    </md-card-content>\n    <md-card-actions align=\"end\">\n      <button md-button>Cancel</button>\n      <button color=\"primary\" md-raised-button>Action</button>\n    </md-card-actions>\n  </md-card>\n  ";
        this.card3HTML = "\n  <md-card fxFlex=\"80%\">\n    <md-card-title>Standard Card</md-card-title>\n    <md-card-subtitle>Subtitle</md-card-subtitle>\n    <md-card-content>\n      <p>Do play they miss give so up. Words to up style of since world. We leaf to snug on no need. Way\n        own uncommonly travelling now acceptance bed compliment solicitude. Dissimilar admiration so\n        terminated no in contrasted it. Advantages entreaties mr he apartments do. Limits far yet turned\n        highly repair parish talked six. Draw fond rank form nor the day eat. </p>\n    </md-card-content>\n  </md-card>\n  ";
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent.prototype.getEscaped = function (text) {
        return _.escape(text);
    };
    CardsComponent = __decorate([
        core_1.Component({
            selector: 'ms-cards',
            templateUrl: './cards.component.html',
            styleUrls: ['./cards.component.scss'],
            host: {
                '[@routeAnimation]': 'true'
            },
            animations: [route_animation_1.routeAnimation]
        })
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
