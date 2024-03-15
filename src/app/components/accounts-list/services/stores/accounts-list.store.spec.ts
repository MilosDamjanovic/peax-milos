import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AccountsStore } from './accounts-list.store';
import { MOCK_ACCOUNTS } from "../../../../test-data/accounts";

describe('AccountsStore', () => {
  let service: AccountsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AccountsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call setAccounts and save accounts to accounts store', () => {
    expect(service.accounts.getValue().length).toEqual(0);

    service.setAccounts(MOCK_ACCOUNTS);

    expect(service.accounts.getValue().length).toEqual(MOCK_ACCOUNTS.length);
  });

});
