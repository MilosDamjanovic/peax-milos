import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from "../../../constants/definitions";
import { WebService } from "../../../core/services/web.service";
import { Account } from "../../../models/account";

@Injectable({
  providedIn: 'root',
})
export class AccountsListService {
  constructor(private webService: WebService) {}

  getAccounts(): Observable<Account[]> {
    return this.webService.get(ApiUrl.ACCOUNTS);
  }

  getSingleAccount(): Observable<Account> {
    return this.webService.get(ApiUrl.SINGLE_ACCOUNT);
  }
}
