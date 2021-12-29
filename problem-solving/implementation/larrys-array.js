// https://www.hackerrank.com/challenges/larrys-array/problem

/*
 * Complete the 'larrysArray' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY A as parameter.
 */

/*
 * Effects of consecutive three elements rotation:
 * 1) one rotation increase or descrease number of inversions by 2 (within this 3 elements subsequence)
 * 2) the influence of the rotation of 3 elements subsequence is local (does not change inversion status of any other pairs)
 * --> As long as the sequence is not strictly increasing, you can always find a 3 elements consecutive subsequence such that one or two rotations of this subsequence can decrease number of inversions by 2
 */

function larrysArray(A) {
	const n = A.length;

	// count the number of inversions
	let count = 0;
	for (let i = 0; i < n - 1; i++) {
		for (let j = i + 1; j < n; j++) {
			if (A[i] > A[j]) {
				count++;
			}
		}
	}

	// if number of inversions are even then array can be sorted
	if (count % 2 === 0) {
		return 'YES';
	}

	return 'NO';
}
