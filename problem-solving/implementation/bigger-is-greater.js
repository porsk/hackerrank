// https://www.hackerrank.com/challenges/bigger-is-greater/problem

/*
 * Lexicographical order is often known as alphabetical order when dealing with strings.
 * A string is greater than another string if it comes later in a lexicographically sorted list.
 *
 * Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:
 * - It must be greater than the original word
 * - It must be the smallest word that meets the first condition
 */

// https://www.nayuki.io/page/next-lexicographical-permutation-algorithm

function biggerIsGreater(w) {
	const n = w.length;
	w = w.split('');

	// find the first value before a weakly decreasing suffix
	let pivot = n - 2;
	while (pivot >= 0 && w[pivot] >= w[pivot + 1]) pivot--;

	// if no value found then we cannot increase the string lexicographical order
	if (pivot === -1) {
		return 'no answer';
	}

	// search backwards for the first greater element then w[pivot]
	let swap = n - 1;
	while (w[swap] <= w[pivot]) swap--;

	// swap the pivot and swap elements
	[w[pivot], w[swap]] = [w[swap], w[pivot]];

	// reverse the sufix in question to get the lowest lexicographical order
	let start = pivot + 1;
	let end = n - 1;
	while (start < end) {
		[w[start], w[end]] = [w[end], w[start]];
		start++;
		end--;
	}

	return w.join('');
}
