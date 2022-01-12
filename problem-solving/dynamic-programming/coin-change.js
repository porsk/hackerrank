// https://www.hackerrank.com/challenges/coin-change/problem

/* Given an amount and the denominations of coins available, determine how many ways change can be made for amount.
 * There is a limitless supply of each coin type.
 */

/*
 * Complete the 'getWays' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. LONG_INTEGER_ARRAY c
 */

// https://www.geeksforgeeks.org/coin-change-dp-7/
function getWays(n, c) {
	const m = c.length;

	// dp[i] will stores the number of solutions for value i
	const dp = Array.from({ length: n + 1 }, () => 0);
	dp[0] = 1;

	for (const coin of c) {
		for (let value = coin; value <= n; value++) {
			dp[value] += dp[value - coin];
		}
	}

	return dp[n];
}
