import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../shared/material.module';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'add-candidate-dialog',
    templateUrl: './add-candidate-dialog.html',
    standalone: true,
    imports: [MaterialModule, FormsModule],
    styleUrl: '../../shared/default-dialog.scss'
  })
  export class AddCandidateDialog {
    name: string = '';
    constructor(
      public dialogRef: MatDialogRef<AddCandidateDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    }

}
  