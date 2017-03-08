"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TrafficSourcesComponent = (function () {
    function TrafficSourcesComponent(nvD3Service) {
        this.title = 'Traffic Sources';
        this.subTitle = 'Total Visits over the last week';
        this.isLoading = false;
        this.d3 = nvD3Service.getD3();
    }
    TrafficSourcesComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 50,
                margin: {
                    top: 0,
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
                showLegend: false,
                useInteractiveGuideline: true
            },
        };
    };
    TrafficSourcesComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    __decorate([
        core_1.Input('title')
    ], TrafficSourcesComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('subTitle')
    ], TrafficSourcesComponent.prototype, "subTitle", void 0);
    __decorate([
        core_1.Input('chartData')
    ], TrafficSourcesComponent.prototype, "chartData", void 0);
    __decorate([
        core_1.Input('chartOptions')
    ], TrafficSourcesComponent.prototype, "chartOptions", void 0);
    TrafficSourcesComponent = __decorate([
        core_1.Component({
            selector: 'ms-traffic-sources',
            templateUrl: './traffic-sources.component.html'
        })
    ], TrafficSourcesComponent);
    return TrafficSourcesComponent;
}());
exports.TrafficSourcesComponent = TrafficSourcesComponent;
