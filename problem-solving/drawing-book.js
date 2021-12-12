// https://www.hackerrank.com/challenges/drawing-book/problem

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
	const pageTurns = Math.floor(p / 2);
	const totalTurns = Math.floor(n / 2);

	return Math.min(pageTurns, totalTurns - pageTurns);
}
