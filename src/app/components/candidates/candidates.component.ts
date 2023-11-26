import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { MaterialModule } from '../../shared/material.module';
import { MatDialog } from '@angular/material/dialog';
import { AddCandidateDialog } from './add-candidate-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from '../../shared/snackbar';

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.scss'
})
export class CandidatesComponent {
  votes: number[] = [];
  candidates = this.dataService.candidates;

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  addCandidate(): void {
    const dialogRef = this.dialog.open(AddCandidateDialog, {
      height: '220px',
      width: '360px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name !== '') {
        this.dataService.candidates.push(
          {
            name: result.name,
            votes: 0,
          },
        );
        this.openSnackBar('Candidate added!');
      }
    });
  }

  openSnackBar(message: any) {
    this.snackBar.openFromComponent(Snackbar, {
      data: message,
      duration: 3000,
    });
  }

}
