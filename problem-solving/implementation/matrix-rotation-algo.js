// https://www.hackerrank.com/challenges/matrix-rotation-algo/problem

/*
 * You are given a 2D matrix of dimension M x N and a positive integer R.
 * You have to rotate the matrix  times and print the resultant matrix.
 * Rotation should be in anti-clockwise direction.
 */

/*
 * Complete the 'matrixRotation' function below.
 *
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY matrix
 *  2. INTEGER r
 */

function matrixRotation(matrix, r) {
	const m = matrix.length;
	const n = matrix[0].length;

	// number of layers to rotate
	const layers = Math.min(Math.floor(m / 2), Math.floor(n / 2));

	for (let i = 0; i < layers; i++) {
		// width and height of the current layer
		const height = m - 2 * i;
		const width = n - 2 * i;

		// list for holding the values from the layer flattened  into an array
		const linear = [];

		// get the current values from the layer
		// left up to down
		for (let j = i; j < i + height - 1; j++) linear.push(matrix[j][i]);
		// bottom left to right
		for (let j = i; j < i + width - 1; j++)
			linear.push(matrix[i + height - 1][j]);
		// right bottom to up
		for (let j = i + height - 1; j > i; j--)
			linear.push(matrix[j][i + width - 1]);
		// up roght to left
		for (let j = i + width - 1; j > i; j--) linear.push(matrix[i][j]);

		// calculate number of necessary moves
		const fullCircles = 2 * height + 2 * width - 4;
		const moves = r % fullCircles;

		// rotate the the elements in the flattened array
		for (let j = 0; j < moves; j++) {
			linear.unshift(linear.pop());
		}

		// put back the elements in the new order
		// left up to down
		for (let j = i; j < i + height - 1; j++) matrix[j][i] = linear.shift();
		// bottom left to right
		for (let j = i; j < i + width - 1; j++)
			matrix[i + height - 1][j] = linear.shift();
		// right bottom to up
		for (let j = i + height - 1; j > i; j--)
			matrix[j][i + width - 1] = linear.shift();
		// up roght to left
		for (let j = i + width - 1; j > i; j--) matrix[i][j] = linear.shift();
	}

	console.log(matrix.map((row) => row.join(' ')).join('\n'));
}
