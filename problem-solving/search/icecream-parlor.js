// https://www.hackerrank.com/challenges/icecream-parlor/problem

/*
 * Two friends like to pool their money and go to the ice cream parlor.
 * They always choose two distinct flavors and they spend all of their money.
 * Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.
 */

/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

function icecreamParlor(m, arr) {
	const map = {};

	for (let i = 0; i < arr.length; i++) {
		const currentCost = arr[i];
		const complementaryCost = m - currentCost;

		// check if we already went over the required complementery cost
		if (map[complementaryCost]) {
			return [map[complementaryCost], i + 1];
		} else {
			map[currentCost] = i + 1;
		}
	}
}
