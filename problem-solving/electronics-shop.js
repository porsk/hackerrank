// https://www.hackerrank.com/challenges/electronics-shop/problem

/*
 * A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget.
 * Given price lists for keyboards and USB drives and a budget, find the cost to buy them.
 * If it is not possible to buy both items, return -1.
 */

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
	keyboards.sort((a, b) => a - b);
	drives.sort((a, b) => b - a);

	let max = -1;
	let i = 0;
	let j = 0;
	while (i < keyboards.length && j < drives.length) {
		const sum = keyboards[i] + drives[j];

		if (sum > b) {
			j++;
		} else {
			max = Math.max(max, sum);
			i++;
		}
	}

	return max;
}
