import {Injectable} from '@angular/core';
import {ProblemListEntity} from './entity/ProblemEntity';


@Injectable()
export class ProblemService {
  private readonly problemList: ProblemListEntity;
  constructor() {
    this.problemList = new ProblemListEntity();
  }
  getAll() {
    return this.problemList;
  }
}
