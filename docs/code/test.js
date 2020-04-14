function NumberOf1Between1AndN_Solution(n) {
	if (n < 1) return 0
	let counts = 0,
		num = 0
	for (let i = 1; i <= n; i++) {
		num = i
		while (num > 0) {
			if (num % 10 == 1) {
				counts++
			}
			num = Math.floor(num / 10)
		}
	}
	return counts
}
