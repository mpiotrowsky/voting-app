import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { MaterialModule } from '../../shared/material.module';
import { MatDialog } from '@angular/material/dialog';
import { AddCandidateDialog } from './add-candidate-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from '../../shared/snackbar';
import { Candidate } from '../../shared/candidate.interface';

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.scss'
})
export class CandidatesComponent implements OnInit {
  votes: number[] = [];
  candidates: Candidate[] = [];

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataService.candidates$.subscribe(data => {
      this.candidates = data;
    });
  }

  addCandidate(): void {
    const dialogRef = this.dialog.open(AddCandidateDialog, {
      height: '220px',
      width: '360px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name !== '') {
        this.dataService.addCandidate({
          name: result.name,
          votes: 0,
          id: crypto.randomUUID(),
        },)
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
