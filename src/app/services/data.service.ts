import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public voters = [
    {
      name: 'Peppa',
      hasVoted: false,
    },
    {
      name: 'Rumcajs',
      hasVoted: true,
    }
  ];

  public candidates = [
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
