// https://www.hackerrank.com/challenges/3d-surface-area/problem

/*
 * Complete the 'surfaceArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY A as parameter.
 */

function surfaceArea(A) {
	const w = A.length;
	const h = A[0].length;

	// init area with the area of the bottom and top of the board which is constant
	let area = 2 * w * h;
	for (let i = 0; i < w; i++) {
		for (let j = 0; j < h; j++) {
			const currentHeight = A[i][j];

			// add the full area of the current cube (all 4 sides)
			area += 4 * currentHeight;

			// subtract the common area of the next cube in the column
			if (i + 1 < w) area -= 2 * Math.min(currentHeight, A[i + 1][j]);
			// subtract the common area of the next cube in the row
			if (j + 1 < h) area -= 2 * Math.min(currentHeight, A[i][j + 1]);
		}
	}

	return area;
}
