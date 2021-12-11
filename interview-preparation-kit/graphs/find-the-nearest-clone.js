// https://www.hackerrank.com/challenges/find-the-nearest-clone/problem

function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    const graphEdges = graphFrom.length;
    const adj = Array.from({ length: graphNodes + 1 }, () => []);

    for (let i = 0; i < graphEdges; i++) {
        adj[graphFrom[i]].push(graphTo[i]);
        adj[graphTo[i]].push(graphFrom[i]);
    }

    const queue = [];
    const visited = Array.from({ length: graphNodes + 1 }, () => false);

    for (let i = 0; i < graphNodes; i++) {
        if (ids[i] === val) {
            queue.push(i + 1);
            visited[i + 1] = true;
        }
    }

    if (queue.length <= 1) {
        return -1;
    }

    let length = 1;
    while (queue.length) {
        const node = queue.shift();

        for (const neighbor of adj[node]) {
            if (ids[neighbor - 1] === val) {
                return length;
            }

            if (!visited[neighbor]) {
                queue.push(neighbor);
                visited[neighbor] = true;
            }
        }

        length++;
    }
}