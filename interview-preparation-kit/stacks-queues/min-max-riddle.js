// https://www.hackerrank.com/challenges/min-max-riddle/problem

// Hints: https://www.geeksforgeeks.org/find-the-maximum-of-minimums-for-every-window-size-in-a-given-array/
function riddle(arr) {
  const N = arr.length;

  const left = new Array(N).fill(N);
  const right = new Array(N).fill(-1);
  const stack = [];

  //  next smaller
  for (let i = 0; i < N; i++) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) stack.pop();

    if (stack.length) right[i] = stack[stack.length - 1];

    stack.push(i);
  }

  while (stack.length) stack.pop();

  // find elements of previous smaller
  for (let i = N - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) stack.pop();

    if (stack.length) left[i] = stack[stack.length - 1];

    stack.push(i);
  }

  const result = new Array(N + 1).fill(0);

  // fill result array by comparing minimums of all lengths computed
  for (let i = 0; i <= N; i++) {
    const length = left[i] - right[i] - 1;
    result[length] = Math.max(result[length], arr[i]);
  }

  // fill remaining elements by taking values from right side of result[]
  for (let i = N - 1; i > 0; i--) {
    result[i] = Math.max(result[i], result[i + 1]);
  }

  result.shift();

  return result;
}
