import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { MaterialModule } from '../../shared/material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from '../../shared/snackbar';

@Component({
  selector: 'app-voting',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './voting.component.html',
  styleUrl: './voting.component.scss'
})
export class VotingComponent {
  voters = this.dataService.voters;
  candidates = this.dataService.candidates;

  votingForm: FormGroup;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar) {
      this.votingForm = this.formBuilder.group({
        selectedVoter: ['', Validators.required],
        selectedCandidate: ['', Validators.required],
      });
    }

  submit() {
    let selectedVoter = this.votingForm.get('selectedVoter')?.value;
    let selectedCandidate = this.votingForm.get('selectedCandidate')?.value;
    console.log(selectedVoter, selectedCandidate);

    selectedVoter.hasVoted = true;
    selectedCandidate.votes++;

    this.votingForm.reset();
    this.openSnackBar('Voted!');
  }

  openSnackBar(message: any) {
    this.snackBar.openFromComponent(Snackbar, {
      data: message,
      duration: 3000,
    });
  }

}
