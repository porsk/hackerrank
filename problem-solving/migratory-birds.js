// https://www.hackerrank.com/challenges/migratory-birds/problem

/*
 * Given an array of bird sightings where every element represents a bird type id,
 * determine the id of the most frequently sighted type.
 * If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
 */

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
	const n = arr.length;
	const map = {};
	let max = 0;

	for (let i = 0; i < n; i++) {
		if (map[arr[i]]) {
			map[arr[i]]++;
		} else {
			map[arr[i]] = 1;
		}

		max = Math.max(max, map[arr[i]]);
	}

	let minIndex = Number.MAX_SAFE_INTEGER;
	let keys = Object.keys(map);
	for (let i = 0; i < keys.length; i++) {
		if (map[keys[i]] === max) {
			minIndex = Math.min(minIndex, keys[i]);
		}
	}

	return minIndex;
}
