"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SourceOverviewWidgetComponent = (function () {
    function SourceOverviewWidgetComponent(nvD3Service) {
        this.d3 = nvD3Service.getD3();
    }
    SourceOverviewWidgetComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 40,
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
        core_1.Input('chartDataArray')
    ], SourceOverviewWidgetComponent.prototype, "chartDataArray", void 0);
    __decorate([
        core_1.Input('options')
    ], SourceOverviewWidgetComponent.prototype, "options", void 0);
    SourceOverviewWidgetComponent = __decorate([
        core_1.Component({
            selector: 'ms-source-overview-widget',
            templateUrl: './source-overview-widget.component.html',
            styleUrls: ['./source-overview-widget.component.scss']
        })
    ], SourceOverviewWidgetComponent);
    return SourceOverviewWidgetComponent;
}());
exports.SourceOverviewWidgetComponent = SourceOverviewWidgetComponent;
