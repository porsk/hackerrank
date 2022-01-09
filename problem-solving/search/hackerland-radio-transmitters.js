// https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem

/* Hackerland is a one-dimensional city with houses aligned at integral locations along a road.
 * The Mayor wants to install radio transmitters on the roofs of the city's houses.
 * Each transmitter has a fixed range meaning it can transmit a signal to all houses within that number of units distance away.
 * Given a map of Hackerland and the transmission range, determine the minimum number of transmitters so
 * that every house is within range of at least one transmitter. Each transmitter must be installed on top of an existing house.
 */

/*
 * Complete the 'hackerlandRadioTransmitters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY x
 *  2. INTEGER k
 */

function hackerlandRadioTransmitters(x, k) {
	const n = x.length;
	x.sort((a, b) => a - b);

	console.log(x);

	let index = 0;
	let count = 0;
	while (index < n) {
		// calculate the optimal position for the next transmitter
		const transmitterPosition = x[index] + k;
		// find the closest value smaller or equal to the optimal position
		while (index < n && x[index] <= transmitterPosition) index++;

		// we need to step back one to get the right value
		index--;

		// calculate the range to the right of the transmitter
		const rightRangePosition = x[index] + k;
		// find the last value in the range
		while (index < n && x[index] <= rightRangePosition) index++;

		count++;
	}

	return count;
}
