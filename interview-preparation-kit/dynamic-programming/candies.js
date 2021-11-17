// https://www.hackerrank.com/challenges/candies/problem

function candies(n, arr) {
  // scoring based on the increasing and decreasing trends
  const incTrend = new Array(n).fill(1);
  const decTrenc = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      incTrend[i] = incTrend[i - 1] + 1;
    }

    if (arr[n - i - 1] > arr[n - i]) {
      decTrenc[n - i - 1] = decTrenc[n - i] + 1;
    }
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    // sum max of the trends
    sum += Math.max(incTrend[i], decTrenc[i]);
  }

  return sum;
}
