// https://www.hackerrank.com/challenges/reduced-string/problem

/*
 * Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations.
 * In each operation, select a pair of adjacent letters that match, and delete them.
 * Delete as many characters as possible using this method and return the resulting string.
 * If the final string is empty, return Empty String.
 */

/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
	const stack = [s[0]];

	for (let i = 1; i < s.length; i++) {
		if (stack.length) {
			if (s[i] === stack[stack.length - 1]) {
				stack.pop();
				continue;
			}
		}

		stack.push(s[i]);
	}

	if (stack.length) {
		return stack.join('');
	}

	return 'Empty String';
}
