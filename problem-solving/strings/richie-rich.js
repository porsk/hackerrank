// https://www.hackerrank.com/challenges/richie-rich/problem

/* Palindromes are strings that read the same from the left or right, for example madam or 0110.
 * You will be given a string representation of a number and a maximum number of changes you can make
 * Alter the string, one digit at a time, to create the string representation of the largest number possible
 * given the limit to the number of changes. The length of the string may not be altered, so you must consider 0's
 * left of all higher digits in your tests. For example 0110 is valid, 0011 is not.
 * Given a string representing the starting number, and a maximum number of changes allowed,
 * create the largest palindromic string of digits possible or the string '-1' if it is not possible to create
 * a palindrome under the contstraints.
 */
/*
 * Complete the 'highestValuePalindrome' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER n
 *  3. INTEGER k
 */

// https://www.hackerrank.com/challenges/richie-rich/forum/comments/167977
function highestValuePalindrome(s, n, k) {
	s = s.split('').map((char) => Number(char));
	let differences = 0;

	// count number of changes needed (differences) to convert the string to palindrome
	for (let i = 0; i < Math.floor(n / 2); i++) {
		if (s[i] !== s[n - i - 1]) {
			differences++;
		}
	}
	console.log(differences);
	console.log(k);
	for (let i = 0; i < Math.floor(n / 2); i++) {
		const leftIndex = i;
		const rightIndex = n - i - 1;

		const left = s[leftIndex];
		const right = s[rightIndex];

		// they are equal but not 9 and we still have enough number of changes
		if (left === right && left !== 9 && k >= differences + 2) {
			s[leftIndex] = 9;
			s[rightIndex] = 9;
			k -= 2;
		}

		// they are different, fixing needed
		if (left !== right) {
			// one of them is 9 so to maximize the other has to be set to 9 as well
			if (left === 9 || right === 9) {
				s[leftIndex] = 9;
				s[rightIndex] = 9;
				k--;
			} else {
				// none of them is 9 but we have enough changes left to set both of them to 9
				if (k >= differences + 1) {
					s[leftIndex] = 9;
					s[rightIndex] = 9;
					k -= 2;
				} else {
					// not enough change to set them 9 so we will use the maximum of the two values
					const max = Math.max(left, right);
					s[leftIndex] = max;
					s[rightIndex] = max;
					k--;
				}
			}

			// this pair is fixed now so the differences count can be decremented
			differences--;
		}
	}

	// deal with the element in the middle in case of odd number of characters
	if (k > 0 && n % 2 !== 0) {
		s[Math.floor(n / 2)] = 9;
		k--;
	}

	if (k >= 0) {
		return s.join('');
	} else {
		return '-1';
	}
}
