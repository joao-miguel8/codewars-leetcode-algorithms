/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.

*/

const sumNoDuplicates = numList => {
	let sumValue = 0;
	for (let i = 0; i < numList.length; i++) {
		const findDuplicate = numList.indexOf(numList[i]) === numList.lastIndexOf(numList[i]);
		findDuplicate ? (sumValue += numList[i]) : null;
	}
	return sumValue;
};
