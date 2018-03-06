module.exports = function getZerosCount(number, base) {
	let result = 0;

	let tmp = [];
	let tmpBase = base;
	
	let i = 0;
	while(tmpBase != 1) {
		for(i = 2; i <= tmpBase; i++)
			if(tmpBase % i == 0)
				break;
		tmp.push(i);
		tmpBase /= i;
	}

	let matrix = [];
	matrix[0] = [tmp[0], 1];
	let num = 0;
	for(let i = 1; i < tmp.length; i++) {
		if(tmp[i] == matrix[num][0]) {
			matrix[num][1]++;
		} else {
			num++;
			matrix[num] = [tmp[i], 1];
		}
	}

	var res = function(divider, n) {
		let s = 0;
		let k = Math.floor(n / divider);
		while(k != 0) {
			s += k;
			k = Math.floor(k / divider);
		}
		return s;
	}

	result = Math.floor(res(matrix[0][0], number)/matrix[0][1]);
	for(let i = 1; i < matrix.length; i++) {
		let tmpRes = Math.floor(res(matrix[i][0], number) / matrix[i][1]);
		if(tmpRes < result)
			result = tmpRes;
	}
	
	return result;
}