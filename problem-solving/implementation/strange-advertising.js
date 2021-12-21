// https://www.hackerrank.com/challenges/strange-advertising/problem

/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
	let likes = 0;
	let people = 5;

	for (let i = 1; i <= n; i++) {
		const half = Math.floor(people / 2);
		likes += half;

		people = half * 3;
	}

	return likes;
}
