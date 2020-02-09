/*eslint no-eval: "error"*/
import { uniq } from 'lodash';

export const problemOneFn = (data: string) => {
  const values = data.split('\n');
  const n = parseInt(values[0], 10);
  const k = values.slice(1, n + 1);
  const sortCrescent = (a, b) => {
    if (a < b ) {
      return -1;
    }
    if (a > b ) {
      return 1;
    }
    return 0;
  };
  return uniq(k).map(m => parseInt(m, 10)).sort(sortCrescent).join('\n');
};

export const problemTwoFn = (data: string) => {
  const values = data.split('\n');
  const operator = values[0];
  const firstNumber = parseInt(values[1], 2);
  const secondNumber = parseInt(values[2], 2);
  const value = eval(`${firstNumber} ${operator} ${secondNumber}`).toString(2);
  let result = value;
  for (let i = 0; i < 8 - value.length; i++) {
    result = `0${result}`;
  }
  return result;
};
