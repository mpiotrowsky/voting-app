import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { MaterialModule } from '../../shared/material.module';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../shared/components/snackbar/snackbar.component';
import { Voter } from '../../shared/interfaces/voter.interface';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-voters',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './voters.component.html',
  styleUrl: './voters.component.scss'
})
export class VotersComponent implements OnInit {
  voters: Voter[] = [];

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

    ngOnInit() {
      this.dataService.voters$.subscribe(data => {
        this.voters = data;
      });
    }

  addVoter(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '220px',
      width: '360px',
      data: {
        title: 'Voter'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name !== '') {
        this.dataService.addVoter({
          name: result.name,
          hasVoted: false,
          id: crypto.randomUUID(),
        },)
        this.openSnackBar('Voter added!');
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
