// https://www.hackerrank.com/challenges/queens-attack-2/problem

/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
	// keep track of the distances the queen can move in each direction
	let dUp = n - r_q;
	let dRight = n - c_q;
	let dDown = r_q - 1;
	let dLeft = c_q - 1;

	let dUpRight = Math.min(dUp, dRight);
	let dDownRight = Math.min(dRight, dDown);
	let dDownLeft = Math.min(dDown, dLeft);
	let dUpLeft = Math.min(dLeft, dUp);

	for (const [r, c] of obstacles) {
		// same row as the queen
		if (r === r_q) {
			// left to the queen
			if (c < c_q) dLeft = Math.min(dLeft, c_q - c - 1);
			// right to the queen
			else dRight = Math.min(dRight, c - c_q - 1);
		}

		// same column as the queen
		if (c === c_q) {
			// up to the queen
			if (r > r_q) dUp = Math.min(dUp, r - r_q - 1);
			// down to the queen
			else dDown = Math.min(dDown, r_q - r - 1);
		}

		// on the diagonals
		if (Math.abs(c - c_q) === Math.abs(r - r_q)) {
			// right to the queen
			if (c > c_q) {
				const distance = c - c_q - 1;
				// up-right to the queen
				if (r > r_q) dUpRight = Math.min(dUpRight, distance);
				// down-right to the queen
				else dDownRight = Math.min(dDownRight, distance);
			}
			// left to the queen
			else {
				const distance = c_q - c - 1;
				// down-left to the queen
				if (r < r_q) dDownLeft = Math.min(dDownLeft, distance);
				// up-left to the queen
				else dUpLeft = Math.min(dUpLeft, distance);
			}
		}
	}

	return (
		dUp +
		dUpLeft +
		dLeft +
		dDownLeft +
		dDown +
		dDownRight +
		dRight +
		dUpRight
	);
}
