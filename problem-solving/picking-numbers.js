// https://www.hackerrank.com/challenges/picking-numbers/problem

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
	const counts = Array.from({ length: 100 }, () => 0);

	for (let i = 0; i < a.length; i++) {
		counts[a[i]]++;
	}

	let max = 0;
	for (let i = 1; i < 100; i++) {
		max = Math.max(counts[i] + counts[i - 1], max);
	}

	return max;
}
