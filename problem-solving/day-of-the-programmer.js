// https://www.hackerrank.com/challenges/day-of-the-programmer/problem

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
	if (year === 1918) {
		return '26.09.1918';
	} else if (
		(year <= 1917 && year % 4 === 0) ||
		year % 400 === 0 ||
		(year % 4 === 0 && year % 100 !== 0)
	) {
		return `12.09.${year}`;
	} else {
		return `13.09.${year}`;
	}
}
