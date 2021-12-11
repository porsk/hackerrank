// https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid/problem

/*
 * Complete the 'maxRegion' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY grid as parameter.
 */

function maxRegion(grid) {
    const n = grid.length;
    const m = grid[0].length;

    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(i, j, n, m, grid));
            }
        }
    }

    return maxArea;
}

function dfs(x, y, n, m, grid) {
    if (x >= n || x < 0 || y >= m || y < 0 || grid[x][y] !== 1) {
        return 0;
    }

    grid[x][y] = -1;

    let count = 1;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            count += dfs(x + i, y + j, n, m, grid);
        }
    }

    return count;
}