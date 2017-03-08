"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./pages/login/login.component');
var register_component_1 = require('./demo/custom-pages/register/register.component');
var forgot_password_component_1 = require('./demo/custom-pages/forgot-password/forgot-password.component');
var admin_component_1 = require('./core/admin/admin.component');
var dashboard_component_1 = require('./demo/dashboard/dashboard.component');
var inbox_component_1 = require('./demo/apps/inbox/inbox.component');
var calendar_component_1 = require('./demo/apps/calendar/calendar.component');
var chat_component_1 = require('./demo/apps/chat/chat.component');
var editor_component_1 = require('./demo/editor/editor.component');
var drag_and_drop_component_1 = require('./demo/drag-and-drop/drag-and-drop.component');
var fixed_header_table_component_1 = require('./demo/tables/fixed-header-table/fixed-header-table.component');
var google_maps_component_1 = require('./demo/maps/google-maps/google-maps.component');
var simple_table_component_1 = require('./demo/tables/simple-table/simple-table.component');
var level5_component_1 = require('./demo/levels/level5/level5.component');
var icons_component_1 = require('./demo/icons/icons.component');
var form_wizard_component_1 = require('./demo/forms/form-wizard/form-wizard.component');
var form_elements_component_1 = require('./demo/forms/form-elements/form-elements.component');
var dynamic_menu_component_1 = require('./demo/dynamic-menu/dynamic-menu.component');
var tooltip_component_1 = require('./demo/components/tooltip/tooltip.component');
var snack_bar_component_1 = require('./demo/components/snack-bar/snack-bar.component');
var slider_component_1 = require('./demo/components/slider/slider.component');
var menu_component_1 = require('./demo/components/menu/menu.component');
var lists_component_1 = require('./demo/components/lists/lists.component');
var grid_list_component_1 = require('./demo/components/grid-list/grid-list.component');
var dialogs_component_1 = require('./demo/components/dialogs/dialogs.component');
var cards_component_1 = require('./demo/components/cards/cards.component');
var buttons_component_1 = require('./demo/components/buttons/buttons.component');
var dashboard_v1_component_1 = require('./demo/custom-pages/dashboard-v1/dashboard-v1.component');
var auth_guard_1 = require('./guards/auth.guard');
var home_component_1 = require('./pages/home/home.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'forgot-password',
        component: forgot_password_component_1.ForgotPasswordComponent
    },
    /* DEMO */
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: '',
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: 'apps/inbox',
                component: inbox_component_1.InboxComponent
            },
            {
                path: 'apps/calendar',
                component: calendar_component_1.CalendarComponent
            },
            {
                path: 'apps/chat',
                component: chat_component_1.ChatComponent
            },
            {
                path: 'dashboard-v1',
                component: dashboard_v1_component_1.DashboardV1Component
            },
            {
                path: 'components/buttons',
                component: buttons_component_1.ButtonsComponent
            },
            {
                path: 'components/cards',
                component: cards_component_1.CardsComponent
            },
            {
                path: 'components/dialogs',
                component: dialogs_component_1.DialogsComponent
            },
            {
                path: 'components/grid-list',
                component: grid_list_component_1.GridListComponent
            },
            {
                path: 'components/lists',
                component: lists_component_1.ListsComponent
            },
            {
                path: 'components/menu',
                component: menu_component_1.MenuComponent
            },
            {
                path: 'components/slider',
                component: slider_component_1.SliderComponent
            },
            {
                path: 'components/snack-bar',
                component: snack_bar_component_1.SnackBarComponent
            },
            {
                path: 'components/tooltips',
                component: tooltip_component_1.TooltipComponent
            },
            {
                path: 'dynamic-menu',
                component: dynamic_menu_component_1.DynamicMenuComponent
            },
            {
                path: 'forms/form-elements',
                component: form_elements_component_1.FormElementsComponent
            },
            {
                path: 'forms/form-wizard',
                component: form_wizard_component_1.FormWizardComponent
            },
            {
                path: 'icons',
                component: icons_component_1.IconsComponent
            },
            {
                path: 'level1/level2/level3/level4/level5',
                component: level5_component_1.Level5Component
            },
            {
                path: 'maps/google-maps',
                component: google_maps_component_1.GoogleMapsComponent
            },
            {
                path: 'tables/simple-table',
                component: simple_table_component_1.SimpleTableComponent
            },
            {
                path: 'tables/fixed-header-table',
                component: fixed_header_table_component_1.FixedHeaderTableComponent
            },
            {
                path: 'drag-and-drop',
                component: drag_and_drop_component_1.DragAndDropComponent
            },
            {
                path: 'editor',
                component: editor_component_1.EditorComponent
            },
        ]
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
