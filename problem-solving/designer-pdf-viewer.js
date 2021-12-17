// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
	const delta = 'a'.charCodeAt(0);

	let max = 0;

	for (let i = 0; i < word.length; i++) {
		const char = word[i];
		const charIndex = char.charCodeAt(0) - delta;
		const charValue = h[charIndex];

		max = Math.max(charValue, max);
	}

	return max * word.length;
}
