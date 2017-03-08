"use strict";
var core_1 = require("@angular/core");
exports.routeAnimation = core_1.trigger('routeAnimation', [
    core_1.transition('void => *', [
        core_1.style({
            opacity: 0,
            transform: 'translate3d(0, 10%, 0)',
        }),
        core_1.group([
            core_1.animate('400ms ease-in-out', core_1.style({
                //transform: 'translate3d(0, 0, 0)',
                transform: 'translate3d(0, 0, 0)',
            })),
            core_1.animate('400ms 150ms ease-in-out', core_1.style({
                opacity: 1,
            }))
        ]),
    ]),
]);
exports.fadeInAnimation = core_1.trigger('fadeInAnimation', [
    core_1.transition('void => *', [
        core_1.style({
            opacity: 0,
        }),
        core_1.animate('400ms 150ms ease-in-out', core_1.style({
            opacity: 1,
        }))
    ]),
]);
