import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterAccountsComponent } from './filter-accounts.component';
import { MOCK_ACCOUNTS } from "../../../test-data/accounts";
import { Account } from "../../../models/account";

describe('FilterAccountsComponent', () => {
  let component: FilterAccountsComponent;
  let fixture: ComponentFixture<FilterAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterAccountsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter accounts correctly and pass value to output', () => {
    component.accounts = MOCK_ACCOUNTS;

    const event: any = { target: { value: 'the' } };
    const spy = spyOn(component.filterAccountsEvent, 'emit').and.callThrough();

    component.applyFilter(event);

    const expectedResult: Account[] = [MOCK_ACCOUNTS[0], MOCK_ACCOUNTS[2], MOCK_ACCOUNTS[3]];
    expect(spy).toHaveBeenCalledWith(expectedResult);
  });
});
