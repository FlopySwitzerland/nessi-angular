"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var WidgetComponent = (function () {
    function WidgetComponent(d3ChartService) {
        this.d3 = d3ChartService.getD3();
    }
    WidgetComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 60,
                margin: {
                    top: 10,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                x: function (d) { return d.date; },
                y: function (d) { return d.value; },
                showXAxis: false,
                showYAxis: false,
                xAxis: {
                    ticks: d3.time.days,
                    axisLabel: '',
                    tickFormat: function (d) {
                        return d3.time.format('%a %d.%m.%Y')(new Date(d));
                    }
                },
                interpolate: 'cardinal',
                showLegend: false,
                useInteractiveGuideline: true
            },
        };
    };
    __decorate([
        core_1.Input('data')
    ], WidgetComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input('options')
    ], WidgetComponent.prototype, "options", void 0);
    WidgetComponent = __decorate([
        core_1.Component({
            selector: 'ms-widget-v1',
            templateUrl: './widget-v1.component.html',
            styleUrls: ['./widget-v1.component.scss']
        })
    ], WidgetComponent);
    return WidgetComponent;
}());
exports.WidgetComponent = WidgetComponent;
