// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
	arr.sort((a, b) => a - b);

	const sum = arr.reduce((current, acc) => acc + current, 0);
	const minimums = sum - arr[arr.length - 1];
	const maximums = sum - arr[0];

	console.log(`${minimums} ${maximums}`);
}
