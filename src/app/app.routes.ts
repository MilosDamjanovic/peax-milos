import {Routes} from '@angular/router';
import {AppRoutes} from "./app-routing.config";
import {AccountsListComponent} from "./components/accounts-list/accounts-list.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {AccountDetailsComponent} from "./components/account-details/account-details.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.ACCOUNTS_LIST,
  },
  {
    path: AppRoutes.ACCOUNTS_LIST,
    component: AccountsListComponent,
  },
  {
    path: AppRoutes.DISPLAY_ACCOUNTS,
    component: AccountDetailsComponent,
    outlet: 'aux',
  },
  // This _needs_ to be the last route!!
  {
    path: '**',
    component: PageNotFoundComponent,
  }
]
