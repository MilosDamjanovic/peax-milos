import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../../../../models/account';

@Injectable({
  providedIn: 'root',
})
export class AccountsStore {
  accounts: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);

  setAccounts(accounts: Account[]): void {
    this.accounts.next(accounts);
  }
}
