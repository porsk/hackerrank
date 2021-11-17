// https://www.hackerrank.com/challenges/max-array-sum/problem

function maxSubsetSum(arr) {
  const N = arr.length;

  let first = 0;
  let second = 0;

  for (let i = 0; i < N; i++) {
    const third = arr[i];

    // The maximum solution ending at index i is either solution for problem i-1, or
    // solution for problem i-2, or solution of problem i-2 + arr[i], or ar[i]
    const max = Math.max(third, first + third, first, second);
    first = second;
    second = max;
  }

  return second;
}
