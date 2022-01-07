// https://www.hackerrank.com/challenges/weighted-uniform-string/problem

/*
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function getValue(char) {
	return String(char).charCodeAt() - 96;
}

function weightedUniformStrings(s, queries) {
	const uniqueSums = new Set();
	let currentSum = getValue(s[0]);
	uniqueSums.add(currentSum);

	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i - 1]) {
			currentSum += getValue(s[i]);
		} else {
			currentSum = getValue(s[i]);
		}

		uniqueSums.add(currentSum);
	}

	const result = [];
	for (const q of queries) {
		if (uniqueSums.has(q)) {
			result.push('Yes');
		} else {
			result.push('No');
		}
	}

	return result;
}
