// https://www.hackerrank.com/challenges/lilys-homework/problem

/*
 * Complete the 'lilysHomework' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/
function countSwaps(helper, sorted) {
	const visited = Array.from({ length: sorted.length }, () => false);
	let swaps = 0;

	for (let i = 0; i < sorted.length; i++) {
		if (!visited[i] && helper[sorted[i]] !== i) {
			let j = i;
			let count = 0;

			while (!visited[j]) {
				visited[j] = true;
				j = helper[sorted[j]];
				count++;
			}

			swaps += count - 1;
		}
	}

	return swaps;
}

function lilysHomework(arr) {
	const n = arr.length;
	const helper = {};

	for (let i = 0; i < n; i++) {
		helper[arr[i]] = i;
	}

	arr.sort((a, b) => a - b);
	const swapsForAsc = countSwaps(helper, arr);
	const swapsForDesc = countSwaps(helper, arr.reverse());

	return Math.min(swapsForAsc, swapsForDesc);
}
