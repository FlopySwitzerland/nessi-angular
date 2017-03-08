"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var sidenav_component_1 = require('./core/sidenav/sidenav.component');
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var sidenav_item_component_1 = require('./core/sidenav-item/sidenav-item.component');
var sidenav_service_1 = require("./core/sidenav/sidenav.service");
var angular2_perfect_scrollbar_1 = require("angular2-perfect-scrollbar");
var icon_sidenav_directive_1 = require('./core/sidenav/icon-sidenav.directive');
var app_routing_1 = require('./app.routing');
var dashboard_v1_component_1 = require('./demo/custom-pages/dashboard-v1/dashboard-v1.component');
var buttons_component_1 = require('./demo/components/buttons/buttons.component');
var highlight_module_1 = require("./core/highlightjs/highlight.module");
var form_elements_component_1 = require('./demo/forms/form-elements/form-elements.component');
var search_component_1 = require('./core/search/search.component');
var breadcrumb_component_1 = require('./core/breadcrumb/breadcrumb.component');
var breadcrumb_service_1 = require("./core/breadcrumb/breadcrumb.service");
var lists_component_1 = require('./demo/components/lists/lists.component');
var widget_v1_component_1 = require('./core/widgets-v1/widget-v1/widget-v1.component');
var nvD3_service_1 = require("./core/nvD3/nvD3.service");
var nvD3_component_1 = require("./core/nvD3/nvD3.component");
var line_chart_widget_component_1 = require('./core/widgets-v1/line-chart-widget/line-chart-widget.component');
var source_overview_widget_component_1 = require('./core/widgets-v1/source-overview-widget/source-overview-widget.component');
var simple_table_component_1 = require('./demo/tables/simple-table/simple-table.component');
var fixed_header_table_component_1 = require('./demo/tables/fixed-header-table/fixed-header-table.component');
var form_wizard_component_1 = require('./demo/forms/form-wizard/form-wizard.component');
var core_2 = require("angular2-google-maps/core");
var google_maps_component_1 = require('./demo/maps/google-maps/google-maps.component');
var cards_component_1 = require('./demo/components/cards/cards.component');
var dialogs_component_1 = require('./demo/components/dialogs/dialogs.component');
var icons_component_1 = require('./demo/icons/icons.component');
var grid_list_component_1 = require('./demo/components/grid-list/grid-list.component');
var menu_component_1 = require('./demo/components/menu/menu.component');
var slider_component_1 = require('./demo/components/slider/slider.component');
var snack_bar_component_1 = require('./demo/components/snack-bar/snack-bar.component');
var tooltip_component_1 = require('./demo/components/tooltip/tooltip.component');
var dynamic_menu_component_1 = require('./demo/dynamic-menu/dynamic-menu.component');
var environment_1 = require("../environments/environment");
var level5_component_1 = require('./demo/levels/level5/level5.component');
var dynamic_menu_service_1 = require("./demo/dynamic-menu/dynamic-menu.service");
var admin_component_1 = require('./core/admin/admin.component');
var login_component_1 = require('./pages/login/login.component');
var register_component_1 = require('./demo/custom-pages/register/register.component');
var forgot_password_component_1 = require('./demo/custom-pages/forgot-password/forgot-password.component');
var ngx_quill_1 = require('ngx-quill');
var editor_component_1 = require('./demo/editor/editor.component');
var quickpanel_component_1 = require('./core/quickpanel/quickpanel.component');
var dashboard_component_1 = require('./demo/dashboard/dashboard.component');
var bar_chart_component_1 = require('./core/widgets/bar-chart/bar-chart.component');
var line_chart_component_1 = require('./core/widgets/line-chart/line-chart.component');
var recent_sales_component_1 = require('./core/widgets/recent-sales/recent-sales.component');
var pie_chart_component_1 = require('./core/widgets/pie-chart/pie-chart.component');
var google_maps_widget_component_1 = require('./core/widgets/google-maps-widget/google-maps-widget.component');
var activity_component_1 = require('./core/widgets/activity/activity.component');
var traffic_sources_component_1 = require('./core/widgets/traffic-sources/traffic-sources.component');
var loading_overlay_component_1 = require('./core/loading-overlay/loading-overlay.component');
var angular_sortablejs_1 = require("angular-sortablejs");
var drag_and_drop_component_1 = require('./demo/drag-and-drop/drag-and-drop.component');
var inbox_component_1 = require('./demo/apps/inbox/inbox.component');
var mail_service_1 = require("./demo/apps/inbox/mail.service");
var inbox_compose_component_1 = require('./demo/apps/inbox/inbox-compose/inbox-compose.component');
var angular_calendar_1 = require("angular-calendar");
var calendar_component_1 = require('./demo/apps/calendar/calendar.component');
var calendar_edit_component_1 = require('./demo/apps/calendar/calendar-edit/calendar-edit.component');
var chat_component_1 = require('./demo/apps/chat/chat.component');
var common_1 = require("@angular/common");
var authentication_service_1 = require("./services/authentication.service");
var user_service_1 = require("./services/user.service");
var alert_service_1 = require("./services/alert.service");
var home_component_1 = require('./pages/home/home.component');
var auth_guard_1 = require('./guards/auth.guard');
var perfectScrollbarConfig = {
    suppressScrollX: true
};
var sortablejsConfig = {
    animation: 300
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                sidenav_component_1.SidenavComponent,
                sidenav_item_component_1.SidenavItemComponent,
                icon_sidenav_directive_1.IconSidenavDirective,
                dashboard_v1_component_1.DashboardV1Component,
                buttons_component_1.ButtonsComponent,
                form_elements_component_1.FormElementsComponent,
                search_component_1.SearchComponent,
                breadcrumb_component_1.BreadcrumbsComponent,
                lists_component_1.ListsComponent,
                widget_v1_component_1.WidgetComponent,
                nvD3_component_1.nvD3,
                line_chart_widget_component_1.LineChartWidgetComponent,
                source_overview_widget_component_1.SourceOverviewWidgetComponent,
                simple_table_component_1.SimpleTableComponent,
                fixed_header_table_component_1.FixedHeaderTableComponent,
                form_wizard_component_1.FormWizardComponent,
                google_maps_component_1.GoogleMapsComponent,
                cards_component_1.CardsComponent,
                dialogs_component_1.DialogsComponent,
                dialogs_component_1.DemoDialog,
                icons_component_1.IconsComponent,
                grid_list_component_1.GridListComponent,
                menu_component_1.MenuComponent,
                slider_component_1.SliderComponent,
                snack_bar_component_1.SnackBarComponent,
                tooltip_component_1.TooltipComponent,
                dynamic_menu_component_1.DynamicMenuComponent,
                level5_component_1.Level5Component,
                admin_component_1.AdminComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                editor_component_1.EditorComponent,
                quickpanel_component_1.QuickpanelComponent,
                dashboard_component_1.DashboardComponent,
                bar_chart_component_1.BarChartComponent,
                line_chart_component_1.LineChartComponent,
                recent_sales_component_1.RecentSalesComponent,
                pie_chart_component_1.PieChartComponent,
                google_maps_widget_component_1.GoogleMapsWidgetComponent,
                activity_component_1.ActivityComponent,
                traffic_sources_component_1.TrafficSourcesComponent,
                loading_overlay_component_1.LoadingOverlayComponent,
                drag_and_drop_component_1.DragAndDropComponent,
                inbox_component_1.InboxComponent,
                inbox_compose_component_1.InboxComposeComponent,
                calendar_component_1.CalendarComponent,
                calendar_edit_component_1.CalendarEditComponent,
                chat_component_1.ChatComponent,
                home_component_1.HomeComponent,
                register_component_1.RegisterComponent
            ],
            entryComponents: [
                dialogs_component_1.DemoDialog,
                inbox_compose_component_1.InboxComposeComponent,
                calendar_edit_component_1.CalendarEditComponent
            ],
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.Routing,
                material_1.MaterialModule.forRoot(),
                flex_layout_1.FlexLayoutModule,
                angular2_perfect_scrollbar_1.PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
                core_2.AgmCoreModule.forRoot({
                    apiKey: environment_1.environment.googleApi
                }),
                ngx_quill_1.QuillModule,
                highlight_module_1.HighlightModule,
                angular_sortablejs_1.SortablejsModule,
                angular_calendar_1.CalendarModule.forRoot(),
            ],
            providers: [
                sidenav_service_1.SidenavService,
                material_1.MdIconRegistry,
                breadcrumb_service_1.BreadcrumbService,
                dynamic_menu_service_1.DynamicMenuService,
                nvD3_service_1.D3ChartService,
                mail_service_1.MailService,
                authentication_service_1.AuthenticationService,
                user_service_1.UserService,
                alert_service_1.AlertService,
                auth_guard_1.AuthGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
