import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AccountsListService } from './accounts-list.service';
import { ApiUrl } from "../../../constants/definitions";
import { MOCK_ACCOUNTS } from "../../../test-data/accounts";

describe('AccountsListService', () => {
  let service: AccountsListService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AccountsListService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAccounts and return an array of accounts', () => {
    service.getAccounts().subscribe((data: Account[]) => {
      expect(data).toEqual(MOCK_ACCOUNTS);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: ApiUrl.ACCOUNTS,
    });

    req.flush(MOCK_ACCOUNTS);
  });

});
