// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
	let count = 0;

	for (let index = i; index <= j; index++) {
		const revers = Number([...String(index)].reverse().join(''));

		if (Math.abs(index - revers) % k === 0) {
			count++;
		}
	}

	return count;
}
