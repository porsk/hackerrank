// https://www.hackerrank.com/challenges/utopian-tree/problem

/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
	let height = 1;

	for (let i = 0; i < n; i++) {
		if (i % 2 == 0) {
			height *= 2;
		} else {
			height++;
		}
	}

	return height;
}
