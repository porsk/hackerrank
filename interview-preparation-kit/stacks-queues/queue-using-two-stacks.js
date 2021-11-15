// https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem

function parseInput(input) {
  const [N, ...queries] = input.split("\n");

  return [Number(N), queries.map((item) => item.split(" "))];
}

function processData(input) {
  const [N, queries] = parseInput(input);

  const queue = [];
  for (let i = 0; i < N; i++) {
    switch (queries[i][0]) {
      case "1": {
        queue.push(queries[i][1]);
        break;
      }
      case "2": {
        queue.shift();
        break;
      }
      case "3": {
        console.log(queue[0]);
      }
    }
  }
}
