import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild,} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {
  MatCellDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatRowDef,
  MatTable,
  MatTableDataSource, MatTableModule
} from '@angular/material/table';
import {Account} from "../../../models/account";
import {AsyncPipe, DatePipe, JsonPipe, NgIf} from "@angular/common";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss'],
  standalone: true,
  imports: [MatPaginator, MatTable, MatTableModule, MatHeaderCell, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, JsonPipe, NgIf, DatePipe, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  displayedColumns: string[] = ['id', 'name', 'createdAt', 'avatarUrl', 'status'];

  dataSource: MatTableDataSource<Account> = new MatTableDataSource<Account>([{
    id: 0,
    name: '',
    avatarUrl: '',
    status: "DEACTIVATED",
    createdAt: ''
  }]);

  @Input()
  set filteredAccounts(filteredAccounts: Account[]) {
    if (filteredAccounts) {
      this.dataSource = new MatTableDataSource<Account>(filteredAccounts);
      this.dataSource.paginator = this.paginator;
    }
  }

  @Output() accountClicked = new EventEmitter<number>();

  trackBy(): any {
    return (index: number) => String(index);
  }


  viewDetails(account: Account): void {
    // TODO: hook up to the service once the emition is received trigger the call to web service and refresh the store
    this.accountClicked.emit(account.id)
  }
}
