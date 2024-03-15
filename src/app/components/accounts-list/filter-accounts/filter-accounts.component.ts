import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Account} from "../../../models/account";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'filter-accounts',
  templateUrl: './filter-accounts.component.html',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput
  ]
})
export class FilterAccountsComponent {
  @Input() accounts!: Account[];

  @Output() filterAccountsEvent = new EventEmitter<Account[]>();

  applyFilter(event: Event): void {
    const filterValue: string = (event.target as HTMLInputElement).value
      .toLowerCase()
      .trim();

    // TODO: connect the filters to the store
    const filteredAccounts: Account[] = (this.accounts ?? []).filter((account) => {
      return (
        account.name.toLowerCase().includes(filterValue));
    });

    this.filterAccountsEvent.emit(filteredAccounts);
  }
}
