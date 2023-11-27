import { Injectable } from '@angular/core';
import { Voter } from '../interfaces/voter.interface';
import { Candidate } from '../interfaces/candidate.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private voters = new BehaviorSubject<Voter[]>([
    {
      name: 'Peppa',
      hasVoted: false,
      id: crypto.randomUUID(),
    },
    {
      name: 'Rumcajs',
      hasVoted: true,
      id: crypto.randomUUID(),
    }]);

  private candidates = new BehaviorSubject<Candidate[]>([
    {
      name: 'Johny Bravo',
      votes: 2,
      id: crypto.randomUUID(),
    },
    {
      name: 'Pluto',
      votes: 6,
      id: crypto.randomUUID(),
    }
  ]);

  public readonly voters$ = this.voters.asObservable();
  public readonly candidates$ = this.candidates.asObservable();

  addVoter(voter: Voter) {
    const currentValue = this.voters.value;
    const updatedValue = [...currentValue, voter];
    this.voters.next(updatedValue);
  }

  updateVotingStatus(voterId: string) {
    const updatedValue = this.voters.value.map(voter => {
      if (voter.id === voterId) {
        voter.hasVoted = true;
      }
      return voter;
    })
    this.voters.next(updatedValue);
  }

  addCandidate(candidate: Candidate) {
    const currentValue = this.candidates.value;
    const updatedValue = [...currentValue, candidate];
    this.candidates.next(updatedValue);
  }

  updateCandidateVotes(candidateId: string) {
    const updatedValue = this.candidates.value.map(candidate => {
      if (candidate.id === candidateId) {
        candidate.votes++;
      }
      return candidate;
    })
    this.candidates.next(updatedValue);
  }
}
