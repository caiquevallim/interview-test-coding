import { problemOneFn, problemTwoFn } from './code';
export class ProblemEntity {
  id: number;
  title: string;
  description: string;
  footer: string;
  entryData: string;
  result: string;
  solveFn: any = () => {};
  constructor(id, title, description, footer, solveFn) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.footer = footer;
    this.solveFn = solveFn;
    this.entryData = '';
  }
  solve() {
    this.result = this.solveFn(this.entryData);
  }
}
export class ProblemListEntity {
  problems: ProblemEntity[] = [];
  constructor() {
    const problemOne = new ProblemEntity(
      1,
      'Conjunto e seus elementos únicos',
      'Por definição, um conjunto não pode ter elementos repetidos.' +
      'Faça um programa capaz de ler um número inteiro N(1<=N<=1000)' +
      ' e em seguida uma lista de números inteiros K(-1000<=K<=1000)',
      'A saída deverá ser um conjunto formado pelos K inteiros em ordem crescente',
      problemOneFn
      );

    const problemTwo = new ProblemEntity(
      2,
      'Operação entre números binários',
      'Faça um programa capaz de operar dois números entre 0-255',
      'A saída deverá também ser em binário',
      problemTwoFn
    );
    this.problems.push(problemOne);
    this.problems.push(problemTwo);
  }
}
