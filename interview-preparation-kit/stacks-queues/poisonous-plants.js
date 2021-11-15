// https://www.hackerrank.com/challenges/poisonous-plants/problem

function poisonousPlants(p) {
  const N = p.length;
  const stack = [];
  let result = 0;

  for (let i = N - 1; i >= 0; i--) {
    let days = 0;

    while (stack.length && stack[stack.length - 1][0] > p[i]) {
      days++;
      days = Math.max(days, stack.pop()[1]);
    }

    result = Math.max(result, days);
    stack.push([p[i], days]);
  }

  return result;
}
