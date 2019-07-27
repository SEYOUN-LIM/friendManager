import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Friend } from '../model/friend';

const friendList: Friend[] = [
  { id: 1, name: 'Seyoun', address: '33 Worthy Street, Ilam' },
  { id: 2, name: 'Luke', address: '1 Cardinal Drive, Hilmorton' },
  { id: 3, name: 'Steve', address: '1 Warren Cres, Hillmorton' },
  { id: 4, name: 'Jason', address: 'Rolleston' }
];

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'address', 'detail'];
  dataSource = new MatTableDataSource<Friend>();
  selection = new SelectionModel<Friend>(true, []);

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Friend>(friendList);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Friend): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  removeSelected() {
    this.selection.selected.forEach(item => {
      let index: number = this.dataSource.data.findIndex(d => d === item);
      this.dataSource.data.splice(index, 1)
      this.dataSource = new MatTableDataSource<Friend>(this.dataSource.data);
    });
    this.selection = new SelectionModel<Friend>(true, []);
  }

}
