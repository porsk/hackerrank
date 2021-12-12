// https://www.hackerrank.com/challenges/the-birthday-bar/problem

/*
 * Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
 *
 * Lily decides to share a contiguous segment of the bar selected such that:
 *
 * The length of the segment matches Ron's birth month, and,
 * The sum of the integers on the squares is equal to his birth day.
 * Determine how many ways she can divide the chocolate.
 */

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
	let sum = 0;
	let count = 0;

	for (let i = 0; i < m; i++) {
		sum += s[i];
	}

	for (let i = m; i < s.length; i++) {
		if (sum === d) {
			count++;
		}

		sum -= s[i - m];
		sum += s[i];
	}

	if (sum == d) {
		count++;
	}

	return count;
}
