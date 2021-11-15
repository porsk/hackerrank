// https://www.hackerrank.com/challenges/castle-on-the-grid/problem

function minimumMoves(grid, startX, startY, goalX, goalY) {
  const N = grid.length;

  const queue = [[startX, startY]];
  const distances = Array(N)
    .fill()
    .map(() => Array(N).fill(Number.MAX_SAFE_INTEGER));
  distances[startX][startY] = 0;

  while (queue.length) {
    const [currentX, currentY] = queue.shift();
    const currentDistance = distances[currentX][currentY];

    if (currentX === goalX && currentY === goalY) {
      return currentDistance;
    }

    const neighbors = [];

    // explore up
    let x = currentX - 1;
    while (x >= 0 && grid[x][currentY] !== "X") {
      neighbors.push([x, currentY]);
      x--;
    }

    // explore down
    x = currentX + 1;
    while (x < N && grid[x][currentY] !== "X") {
      neighbors.push([x, currentY]);
      x++;
    }

    // explore left
    let y = currentY - 1;
    while (y >= 0 && grid[currentX][y] !== "X") {
      neighbors.push([currentX, y]);
      y--;
    }

    // expore right
    y = currentY + 1;
    while (y < N && grid[currentX][y] !== "X") {
      neighbors.push([currentX, y]);
      y++;
    }

    // keep neighbors whose distances have decreased
    for (let i = 0; i < neighbors.length; i++) {
      const [neighborX, neighborY] = neighbors[i];

      if (currentDistance + 1 < distances[neighborX][neighborY]) {
        distances[neighborX][neighborY] = currentDistance + 1;
        queue.push([neighborX, neighborY]);
      }
    }
  }
}
