import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'snackbar',
    templateUrl: 'snackbar.html',
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
  export class Snackbar {
    constructor(
      public snackBarRef: MatSnackBarRef<Snackbar>,
      @Inject(MAT_SNACK_BAR_DATA) public data: any
    ) { }
  }
  