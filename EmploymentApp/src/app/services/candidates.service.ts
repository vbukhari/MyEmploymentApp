import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from "rxjs";
import { Candidate } from "../models/candidate";

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  candidates: Observable<Candidate[]>;
  constructor(private db: AngularFireDatabase) { 
    this.candidates = this.db.list<Candidate>('/candidates').valueChanges();
  }

  getCandidates(){
    return this.candidates;
  }
}
