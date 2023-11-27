import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { MaterialModule } from '../../shared/material.module';
import { MatDialog } from '@angular/material/dialog';
import { AddVoterDialog } from './add-voter-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from '../../shared/snackbar';
import { Voter } from '../../shared/voter.interface';

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
    const dialogRef = this.dialog.open(AddVoterDialog, {
      height: '220px',
      width: '360px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name !== '') {
        this.dataService.addVoter({
          name: result.name,
          hasVoted: false,
        },)
        this.openSnackBar('Voter added!');
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
