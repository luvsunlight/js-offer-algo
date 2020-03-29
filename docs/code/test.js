function jumpFloorII(number) {
	if (number <= 1) return number
	let hashmap = { 1: 1 }
	for (let i = 2; i <= number; i++) {
		hashmap[i] = hashmap[i - 1] * 2
	}
	return hashmap[number]
}

console.log(jumpFloorII(5))
