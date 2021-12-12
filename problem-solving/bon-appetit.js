// https://www.hackerrank.com/challenges/bon-appetit/problem

/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
	let sum = 0;

	for (let i = 0; i < bill.length; i++) {
		sum += bill[i];
	}

	const sharedBill = (sum - bill[k]) / 2;
	if (sharedBill === b) {
		console.log('Bon Appetit');
	} else {
		console.log(b - sharedBill);
	}
}
