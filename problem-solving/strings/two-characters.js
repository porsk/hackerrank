// https://www.hackerrank.com/challenges/two-characters/problem

/* Given a string, remove characters until the string is made up of any two alternating characters.
 * When you choose a character to remove, all instances of that character must be removed.
 * Determine the longest string possible that contains just two alternating letters.
 */

/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
	const map = {};

	// get count of the characters
	for (const char of s) {
		if (map[char]) {
			map[char]++;
		} else {
			map[char] = 1;
		}
	}

	const uniqueChars = Object.keys(map);
	let max = 0;

	// iterate over the unique character pairs
	for (const firstChar of uniqueChars) {
		for (const secondChar of uniqueChars) {
			if (firstChar === secondChar) continue;

			// find the first occurrence of any of the two chars
			let k = 0;
			while (s[k] !== first && s[k] !== second) k++;

			// form there check validity of the input string (alternating first and second chars)
			let previous = s[k];
			let valid = true;
			for (k = k + 1; k < s.length; k++) {
				if (s[k] === first || s[k] === second) {
					// in case of two consecutive occurrence of the same character it is invalid
					if (s[k] === previous) {
						valid = false;
						break;
					}

					previous = s[k];
				}
			}

			// if the string would be valid using the two characters calculate its length
			if (valid) {
				max = Math.max(max, map[first] + map[second]);
			}
		}
	}

	return max;
}
