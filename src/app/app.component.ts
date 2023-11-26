import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VotingComponent } from './components/voting/voting.component';
import { VotersComponent } from './components/voters/voters.component';
import { CandidatesComponent } from './components/candidates/candidates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, VotersComponent, CandidatesComponent, VotingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'voting-app';
}
