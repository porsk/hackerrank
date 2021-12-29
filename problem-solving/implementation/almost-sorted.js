// https://www.hackerrank.com/challenges/almost-sorted/problem

/*
 * Complete the 'almostSorted' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function isSorted(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}

	return true;
}

// https://www.youtube.com/watch?v=UWmSQFNjEZg&ab_channel=alGOds
function almostSorted(arr) {
	if (isSorted(arr)) {
		return console.log('yes');
	}

	const n = arr.length;
	if (n === 2) {
		return console.log('yes\nswap 1 2');
	}

	// count peaks and valleys
	const peaks = [];
	const valleys = [];

	for (let i = 1; i < n - 1; i++) {
		if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
			peaks.push(i);
		}

		if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
			valleys.push(i);
		}
	}

	// in case of 1 peak and 1 valley we might can swap or reverse a subarray to make the input increasing
	if (peaks.length === 1 && valleys.length === 1) {
		const [p] = peaks;
		const [v] = valleys;

		if (arr[v] > arr[p - 1] && arr[p] < arr[v + 1]) {
			if (v - p === 1) {
				return console.log(`yes\nswap ${p + 1} ${v + 1}`);
			} else {
				return console.log(`yes\nreverse ${p + 1} ${v + 1}`);
			}
		}
	}

	// in case of 2 peaks and 2 valleys we might can swap two elements to solve the problem
	if (peaks.length === 2 && valleys.length === 2) {
		const [p1, p2] = peaks;
		const [v1, v2] = valleys;

		if (
			arr[v2] > arr[p1 - 1] &&
			arr[v2] < arr[p1 + 1] &&
			arr[p1] < arr[v2 + 1] &&
			arr[p1] > arr[p2]
		) {
			return console.log(`yes\nswap ${p1 + 1} ${v2 + 1}`);
		}
	}

	console.log('no');
}
