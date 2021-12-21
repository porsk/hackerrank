// https://www.hackerrank.com/challenges/non-divisible-subset/problem

// Given a set of distinct integers, print the size of a maximal subset of S where the sum of any two numbers in S' is not evenly divisible by k.

/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
	// if k equals to 1 return 1 since all the numbers are divisible and we can pick only one
	if (k === 1) {
		return 1;
	}

	// build up a frequency list of the remainders
	const remainders = new Array(k).fill(0);
	for (const number of s) {
		remainders[number % k]++;
	}

	let result = 0;
	for (let i = 1; i < k; i++) {
		// check the remainder paris which add up to k
		// select the one with higher frequency
		if (remainders[i] >= remainders[k - i]) {
			if (i !== k - i) {
				result += remainders[i];
			} else {
				// in case it is the middle (i === k - i) add only one since
				// two numbers with middle remainder will add up to k and be divisible
				result++;
			}
		}
	}

	// we can add up to one number to the list with 0 remainders
	if (remainders[0]) {
		result++;
	}

	return result;
}
