import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    exports: [MatButtonModule, MatToolbarModule, MatGridListModule, MatTableModule,
        MatCheckboxModule,MatPaginatorModule,MatFormFieldModule, MatInputModule,],
    imports: [MatButtonModule, MatToolbarModule, MatGridListModule, MatTableModule,
        MatCheckboxModule,MatPaginatorModule,MatFormFieldModule, MatInputModule,],
})
export class MyMaterialModule { }