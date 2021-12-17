// https://www.hackerrank.com/challenges/the-hurdle-race/problem

/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
	const max = Math.max(...height);

	if (max > k) {
		return max - k;
	}

	return 0;
}
