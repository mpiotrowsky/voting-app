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
  },
  {
    name: 'Rumcajs',
    hasVoted: true,
  }]);

  private candidates = new BehaviorSubject<Candidate[]>([
    {
      name: 'Johny Bravo',
      votes: 2,
    },
    {
      name: 'Pluto',
      votes: 6,
    }
  ]);

  public readonly voters$ = this.voters.asObservable();
  public readonly candidates$ = this.candidates.asObservable();

  addVoter(voter: Voter) {
    const currentValue = this.voters.value;
    const updatedValue = [...currentValue, voter];
    this.voters.next(updatedValue);
  }

  addCandidate(candidate: Candidate) {
    const currentValue = this.candidates.value;
    const updatedValue = [...currentValue, candidate];
    this.candidates.next(updatedValue);
  }

}
