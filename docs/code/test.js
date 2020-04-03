function InversePairs(data) {
	let res = 0
	for (let i = 0; i < data.length; i++) {
		for (let j = i + 1; j < data.length; j++) {
			if (data[i] > data[j]) res++
		}
	}
	return res
}
console.log(InversePairs([1, 2, 3, 4, 5]))
