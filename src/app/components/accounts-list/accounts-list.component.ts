import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil, tap} from 'rxjs';
import {AccountsListService} from './services/accounts-list.service';
import {AccountsStore} from './services/stores/accounts-list.store';
import {Account} from "../../models/account";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {TableComponent} from "./table-component/table-component.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {FilterAccountsComponent} from "./filter-accounts/filter-accounts.component";

@Component({
  selector: 'accounts-list',
  templateUrl: './accounts-list.component.html',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatPaginatorModule, MatToolbarModule, TableComponent, NgIf, AsyncPipe, FilterAccountsComponent],
  styleUrls: ['./accounts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsListComponent implements OnInit, OnDestroy {

  private onDestroy$: Subject<boolean> = new Subject<boolean>();

  accounts!: Account[];
  filteredAccounts$: Observable<Account[]> = this.accountsListService.getAccounts().pipe(
    tap((accounts: Account[]) => {
      this.accountsStore.setAccounts(accounts);
      this.accounts = accounts;
    }),
    takeUntil(this.onDestroy$))

  filteredAccounts!: Account[];


  constructor(
    private accountsListService: AccountsListService,
    private accountsStore: AccountsStore
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  applyFilter(filteredAccounts: Account[]): void {
    this.filteredAccounts = filteredAccounts;
  }

  openAccountDetails(id: number) {
    console.warn('id: ', id)
  }
}
