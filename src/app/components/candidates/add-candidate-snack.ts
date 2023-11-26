import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'add-candidate-snack',
    templateUrl: 'add-candidate-snack.html',
    standalone: true,
    styles: [
      `
      .example {
        color: #fff;
        display: flex;
        justify-content: center;
      }
    `,
    ],
  })
  export class AddCandidateSnack {
    constructor(
      public snackBarRef: MatSnackBarRef<AddCandidateSnack>,
      @Inject(MAT_SNACK_BAR_DATA) public data: any
    ) { }
  }
  