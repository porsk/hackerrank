// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
	const catADistance = Math.abs(x - z);
	const catBDistance = Math.abs(y - z);

	if (catADistance === catBDistance) {
		return 'Mouse C';
	} else if (catADistance < catBDistance) {
		return 'Cat A';
	} else {
		return 'Cat B';
	}
}
