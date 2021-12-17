// https://www.hackerrank.com/challenges/angry-professor/problem

/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
	const n = a.length;

	let presentCount = 0;
	for (let i = 0; i < n; i++) {
		if (a[i] <= 0) {
			presentCount++;
		}
	}

	if (presentCount < k) {
		return 'YES';
	}

	return 'NO';
}
