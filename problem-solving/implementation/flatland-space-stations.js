// https://www.hackerrank.com/challenges/flatland-space-stations/problem

/*
 * Flatland is a country with a number of cities, some of which have space stations. Cities are numbered consecutively
 * and each has a road of 1 km length connecting it to the next city.
 * It is not a circular route, so the first city doesn't connect with the last city.
 * Determine the maximum distance from any city to its nearest space station.
 */

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
	c.sort((a, b) => a - b);

	// initial max distance is the distance between the 0th city and the first station
	let maxDistance = c[0];
	for (let i = 0; i < c.length - 1; i++) {
		const currentDistance = c[i + 1] - c[i];
		// update max if half of the gap between two stations is bigger
		maxDistance = Math.max(maxDistance, Math.floor(currentDistance / 2));
	}

	// check the distance between the last station and the last city as well
	maxDistance = Math.max(maxDistance, n - 1 - c[c.length - 1]);

	return maxDistance;
}
