import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Friend } from '../model/friend';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { trigger, style, transition, animate, query } from '@angular/animations';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
  animations: [
    trigger('myAni', [
      transition('* <=> *', [
        query(
          '.mat-elevation-z8',
          [
            style({ opacity: 0, transform: 'translateX(5px)' }),
            animate(
              '550ms ease-out',
              style({ opacity: 1, transform: 'translateX(0px)' })
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class FriendListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'address', 'detail'];
  dataSource = new MatTableDataSource<Friend>();
  selection = new SelectionModel<Friend>(true, []);
  isLinear = false;
  nameFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  showAdd = false;

  constructor(private _formBuilder: FormBuilder,
    private data: DataService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Friend>(this.data.getFriends());
    this.dataSource.paginator = this.paginator;

    this.nameFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required]
    });
    this.addressFormGroup = this._formBuilder.group({
      addressCtrl: ['', Validators.required]
    })
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addFriend() {
    this.showAdd = true;
    this.isLinear = false;
  }

  canceled(stepper) {
    stepper.reset();
    this.showAdd = false;
  }

  saveFriend(stepper) {
    if (this.nameFormGroup.value.nameCtrl == '' || this.addressFormGroup.value.addressCtrl == '') {
      return;
    }

    const data = this.dataSource.data;
    data.sort(x => x.id);
    var id = data[data.length - 1].id + 1;
    var friend = {
      id: id,
      name: this.nameFormGroup.value.nameCtrl,
      address: this.addressFormGroup.value.addressCtrl
    }

    data.push(friend);

    this.dataSource.data = data;

    this.canceled(stepper);
  }

  onAutocompleteSelected(e) {
    this.addressFormGroup.value.addressCtrl = e.formatted_address
  }

}
