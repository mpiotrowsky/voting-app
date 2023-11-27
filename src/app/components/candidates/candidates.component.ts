import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { MaterialModule } from '../../shared/material.module';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../shared/components/snackbar/snackbar.component';
import { Candidate } from '../../shared/interfaces/candidate.interface';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

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
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '220px',
      width: '360px',
      data: {
        title: 'Candidate'
      },
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
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 3000,
    });
  }

}
