import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../models/candidate';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  candidate: Candidate = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    
  }
  constructor() { }

  ngOnInit() {
  }

}
