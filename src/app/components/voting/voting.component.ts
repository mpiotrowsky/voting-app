import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../shared/components/snackbar/snackbar.component';
import { Voter } from '../../shared/interfaces/voter.interface';
import { Candidate } from '../../shared/interfaces/candidate.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-voting',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatSelectModule],
  templateUrl: './voting.component.html',
  styleUrl: './voting.component.scss'
})
export class VotingComponent {
  voters: Voter[] = [];
  candidates: Candidate[] = [];

  votingForm = this.formBuilder.group({
    selectedVoter: ['', Validators.required],
    selectedCandidate: ['', Validators.required],
  });

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar) {
    }

  ngOnInit() {
    this.dataService.candidates$.subscribe(data => {
      this.candidates = data;
    });
    this.dataService.voters$.subscribe(data => {
      this.voters = data.filter(voter => !voter.hasVoted);
    });
  }

  submit() {
    const selectedVoterID = this.votingForm.value.selectedVoter;
    const selectedCandidateID = this.votingForm.value.selectedCandidate;

    this.dataService.updateVotingStatus(selectedVoterID as string);
    this.dataService.updateCandidateVotes(selectedCandidateID as string);

    this.votingForm.reset();
    this.openSnackBar('Voted!');
  }

  openSnackBar(message: any) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 3000,
    });
  }
}