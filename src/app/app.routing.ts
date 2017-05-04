import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {ForgotPasswordComponent} from './demo/custom-pages/forgot-password/forgot-password.component';
import {AdminComponent} from './core/admin/admin.component';
import {DashboardComponent} from './demo/dashboard/dashboard.component';
import {InboxComponent} from './demo/apps/inbox/inbox.component';
import {CalendarComponent} from './demo/apps/calendar/calendar.component';
import {ChatComponent} from './demo/apps/chat/chat.component';
import {EditorComponent} from './demo/editor/editor.component';
import {DragAndDropComponent} from './demo/drag-and-drop/drag-and-drop.component';
import {FixedHeaderTableComponent} from './demo/tables/fixed-header-table/fixed-header-table.component';
import {GoogleMapsComponent} from './demo/maps/google-maps/google-maps.component';
import {SimpleTableComponent} from './demo/tables/simple-table/simple-table.component';
import {Level5Component} from './demo/levels/level5/level5.component';
import {IconsComponent} from './demo/icons/icons.component';
import {FormWizardComponent} from './demo/forms/form-wizard/form-wizard.component';
import {FormElementsComponent} from './demo/forms/form-elements/form-elements.component';
import {DynamicMenuComponent} from './demo/dynamic-menu/dynamic-menu.component';
import {TooltipComponent} from './demo/components/tooltip/tooltip.component';
import {SnackBarComponent} from './demo/components/snack-bar/snack-bar.component';
import {SliderComponent} from './demo/components/slider/slider.component';
import {MenuComponent} from './demo/components/menu/menu.component';
import {ListsComponent} from './demo/components/lists/lists.component';
import {GridListComponent} from './demo/components/grid-list/grid-list.component';
import {DialogsComponent} from './demo/components/dialogs/dialogs.component';
import {CardsComponent} from './demo/components/cards/cards.component';
import {ButtonsComponent} from './demo/components/buttons/buttons.component';
import {DashboardV1Component} from './demo/custom-pages/dashboard-v1/dashboard-v1.component';
import {AuthGuard} from './guards/auth.guard';
import {HomeComponent} from './pages/home/home.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {MarksComponent} from './pages/marks/marks.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { LandingComponent } from './pages/landing/landing.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  /* ADMIN */
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'marks',
        component: MarksComponent
      },
      {
        path: 'subjects',
        component: SubjectsComponent
      },
    ]
  },

  /* DEMO */
  {
    path: 'demo',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'apps/inbox',
        component: InboxComponent
      },
      {
        path: 'apps/calendar',
        component: CalendarComponent
      },
      {
        path: 'apps/chat',
        component: ChatComponent
      },
      {
        path: 'dashboard-v1',
        component: DashboardV1Component
      },
      {
        path: 'components/buttons',
        component: ButtonsComponent
      },
      {
        path: 'components/cards',
        component: CardsComponent
      },
      {
        path: 'components/dialogs',
        component: DialogsComponent
      },
      {
        path: 'components/grid-list',
        component: GridListComponent
      },
      {
        path: 'components/lists',
        component: ListsComponent
      },
      {
        path: 'components/menu',
        component: MenuComponent
      },
      {
        path: 'components/slider',
        component: SliderComponent
      },
      {
        path: 'components/snack-bar',
        component: SnackBarComponent
      },
      {
        path: 'components/tooltips',
        component: TooltipComponent
      },
      {
        path: 'dynamic-menu',
        component: DynamicMenuComponent
      },
      {
        path: 'forms/form-elements',
        component: FormElementsComponent
      },
      {
        path: 'forms/form-wizard',
        component: FormWizardComponent
      },
      {
        path: 'icons',
        component: IconsComponent
      },
      {
        path: 'level1/level2/level3/level4/level5',
        component: Level5Component
      },
      {
        path: 'maps/google-maps',
        component: GoogleMapsComponent
      },
      {
        path: 'tables/simple-table',
        component: SimpleTableComponent
      },
      {
        path: 'tables/fixed-header-table',
        component: FixedHeaderTableComponent
      },
      {
        path: 'drag-and-drop',
        component: DragAndDropComponent
      },
      {
        path: 'editor',
        component: EditorComponent
      },
    ]
  }
];

export const Routing = RouterModule.forRoot(appRoutes);
