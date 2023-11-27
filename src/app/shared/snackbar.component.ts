import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar',
    templateUrl: 'snackbar.component.html',
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
  export class SnackbarComponent {
    constructor(
      public snackBarRef: MatSnackBarRef<SnackbarComponent>,
      @Inject(MAT_SNACK_BAR_DATA) public data: any
    ) { }
  }
  