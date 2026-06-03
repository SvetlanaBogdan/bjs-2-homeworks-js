function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}

		sum += arr[i];
	}
	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let min = Infinity;
	let max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let evenSum = 0;
	let oddSum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			evenSum += arr[i];
		} else {
			oddSum += arr[i];
		}
	}

	return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
	let sumEven = 0;
	let countEven = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEven += arr[i];
			countEven += 1;
		}
	}

	if (countEven === 0) {
		return 0;
	}

	return sumEven / countEven;
}

function makeWork(arrOfArr, func) {
	let maxResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);

		if (result > maxResult) {
			maxResult = result;
		}
	}

	return maxResult;
}