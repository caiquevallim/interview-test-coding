import {Component, Input, OnInit} from '@angular/core';
import {ProblemEntity} from '../../shared/entity/ProblemEntity';

@Component({
  selector: 'app-problem-solution',
  templateUrl: './problem-solution.component.html',
  styleUrls: ['./problem-solution.component.scss']
})
export class ProblemSolutionComponent implements OnInit {
  @Input() problem: ProblemEntity;

  ngOnInit() {
    console.log('it is working');
  }
}
