import { Injectable } from '@angular/core';
import { Voter } from '../shared/voter.interface';
import { Candidate } from '../shared/candidate.interface';
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

  updateVoter(updatedVoter: Voter) {
    const updatedValue = this.voters.value.map(voter => {
      if (voter.id === updatedVoter.id) {
        voter = updatedVoter;
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

  updateCandidate(updatedCandidate: Candidate) {
    const updatedValue = this.candidates.value.map(candidate => {
      if (candidate.id === updatedCandidate.id) {
        candidate = updatedCandidate;
      }
      return candidate;
    })
    this.candidates.next(updatedValue);
  }

}
