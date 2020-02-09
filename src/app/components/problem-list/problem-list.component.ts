import {Component, OnInit} from '@angular/core';
import {ProblemService} from '../../shared/problem.service';
import {ProblemEntity, ProblemListEntity} from '../../shared/entity/ProblemEntity';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss'],
  providers: [ProblemService]
})
export class ProblemListComponent implements OnInit {
  problems: ProblemListEntity;
  problemSelected: ProblemEntity;
  constructor(private problemService: ProblemService) {
    console.log('it is working');
  }
  ngOnInit() {
    this.problems = this.problemService.getAll();
    this.problemSelected = null;
  }
  selectProblem(problem) {
    this.problemSelected = problem;
  }
}
