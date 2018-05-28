import { Component, OnInit } from '@angular/core';
import { CandidatesService } from "../../services/candidates.service";
import {  } from "../../models/candidate";

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates: any[];
  constructor(public candidateService: CandidatesService) { }

  ngOnInit() {
    this.candidateService.getCandidates().subscribe(items => {
      this.candidates = items;
    });
  }
}
