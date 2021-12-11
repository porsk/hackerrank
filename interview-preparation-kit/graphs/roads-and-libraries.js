// https://www.hackerrank.com/challenges/torque-and-development/problem

/*
 * Complete the 'roadsAndLibraries' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c_lib
 *  3. INTEGER c_road
 *  4. 2D_INTEGER_ARRAY cities
 */

function roadsAndLibraries(n, c_lib, c_road, cities) {
    if (c_lib <= c_road) {
        return n * c_lib;
    }

    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [fromNode, toNode] of cities) {
        adj[fromNode].push(toNode);
        adj[toNode].push(fromNode);
    }

    let visited = new Map();
    let cost = 0;
    for (let i = 1; i <= n; i++) {
        if (!visited.has(i)) {
            const numberOfNodes = dfs(i, adj, visited);
            cost += c_lib + (numberOfNodes - 1) * c_road;
        }
    }

    return cost;
}

function dfs(node, adj, visited) {
    visited.set(node);

    let count = 1;
    for (const neighbor of adj[node]) {
        if (!visited.has(neighbor)) {
            count += dfs(neighbor, adj, visited);
        }
    }

    return count;
}