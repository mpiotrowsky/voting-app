import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'add-voter-dialog',
    templateUrl: './add-voter-dialog.html',
    standalone: true,
    imports: [MaterialModule, FormsModule],
    styleUrl: '../../shared/default-dialog.scss'
  })
  export class AddVoterDialog {
    name: string = '';
    constructor(
      public dialogRef: MatDialogRef<AddVoterDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    }

}
  