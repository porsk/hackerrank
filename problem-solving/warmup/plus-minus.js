// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
	const n = arr.length;

	let positives = 0;
	let negatives = 0;
	let zeros = 0;

	for (const current of arr) {
		if (current > 0) {
			positives++;
		} else if (current === 0) {
			zeros++;
		} else {
			negatives++;
		}
	}

	console.log((positives / n).toFixed(6));
	console.log((negatives / n).toFixed(6));
	console.log((zeros / n).toFixed(6));
}
