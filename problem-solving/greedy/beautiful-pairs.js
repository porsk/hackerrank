// https://www.hackerrank.com/challenges/beautiful-pairs/problem

/*
 * Complete the 'beautifulPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY A
 *  2. INTEGER_ARRAY B
 */

function beautifulPairs(A, B) {
	const counts = {};
	const n = A.length;

	for (const a of A) {
		if (counts[a]) {
			counts[a]++;
		} else {
			counts[a] = 1;
		}
	}

	// counting beautiful pairs
	let result = 0;
	for (const b of B) {
		if (counts[b]) {
			result++;
			counts[b]--;
		}
	}

	if (n === result) {
		// changing any element will decrease the paris by one
		return result - 1;
	} else {
		// we can match one more by changing one element
		return result + 1;
	}
}
