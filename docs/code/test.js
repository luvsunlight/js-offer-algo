function IsContinuous(numbers) {
	let set = new Set()
	let max = -Infinity,
		min = Infinity
	for (let i = 0; i < numbers.length; i++) {
		let num = numbers[i]
		if (num !== 0) {
			if (set.has(num)) return false
			set.add(num)
			if (num > max) max = num
			if (num < min) min = num
		}
	}
	return max - min <= 4
}
console.log(IsContinuous([1, 3, 2, 5, 4]))
