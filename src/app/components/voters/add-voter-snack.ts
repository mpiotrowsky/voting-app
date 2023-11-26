import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'add-voter-snack',
    templateUrl: 'add-voter-snack.html',
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
  export class AddVoterSnack {
    constructor(
      public snackBarRef: MatSnackBarRef<AddVoterSnack>,
      @Inject(MAT_SNACK_BAR_DATA) public data: any
    ) { }
  }
  