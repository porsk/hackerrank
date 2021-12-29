// https://www.hackerrank.com/challenges/absolute-permutation/problem

/*
 * Complete the 'absolutePermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 */

function absolutePermutation(n, k) {
	if (k === 0) {
		return Array.from({ length: n }, (x, i) => i + 1);
	}

	// bc we need to "shuffle" groups of 2*k elements
	if (2 * k > n || n % (2 * k) !== 0) {
		return [-1];
	}

	const result = [];
	for (let i = 1; i <= n; i++) {
		result.push(i + k);

		// switch between adding and subtract k after every k cycle
		if (i % k === 0) {
			k *= -1;
		}
	}

	return result;
}
