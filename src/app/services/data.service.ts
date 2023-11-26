import { Injectable } from '@angular/core';
import { Voter } from '../shared/voter.interface';
import { Candidate } from '../shared/candidate.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public voters: Voter[] = [
    {
      name: 'Peppa',
      hasVoted: false,
    },
    {
      name: 'Rumcajs',
      hasVoted: true,
    }
  ];

  public candidates: Candidate[] = [
    {
      name: 'Johny Bravo',
      votes: 2,
    },
    {
      name: 'Pluto',
      votes: 6,
    }
  ];

}
