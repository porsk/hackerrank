// https://www.hackerrank.com/challenges/largest-rectangle/problem

function largestRectangle(h) {
  const N = h.length;
  const stack = [[0, h[0]]];

  let maxArea = 0;
  for (let i = 1; i < N; i++) {
    if (h[i] < stack[stack.length - 1][1]) {
      let building = undefined;
      while (stack.length && stack[stack.length - 1][1] > h[i]) {
        building = stack.pop();
        maxArea = Math.max(maxArea, building[1] * (i - building[0]));
      }

      stack.push([building ? building[0] : i, h[i]]);
    } else {
      stack.push([i, h[i]]);
    }
  }

  for (let i = 0; i < stack.length; i++) {
    maxArea = Math.max(maxArea, stack[i][1] * (N - stack[i][0]));
  }

  return maxArea;
}
