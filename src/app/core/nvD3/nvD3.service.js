"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var d3 = require('d3');
var Nv = require('nvd3');
var D3ChartService = (function () {
    function D3ChartService() {
    }
    D3ChartService.prototype.getD3 = function () {
        return d3;
    };
    D3ChartService.prototype.getNv = function () {
        return Nv;
    };
    D3ChartService = __decorate([
        core_1.Injectable()
    ], D3ChartService);
    return D3ChartService;
}());
exports.D3ChartService = D3ChartService;
