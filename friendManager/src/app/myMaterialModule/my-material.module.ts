import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    exports: [MatButtonModule, MatToolbarModule, MatGridListModule, MatTableModule,
        MatCheckboxModule,],
    imports: [MatButtonModule, MatToolbarModule, MatGridListModule, MatTableModule,
        MatCheckboxModule,],
})
export class MyMaterialModule { }