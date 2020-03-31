class Heap {
	constructor(length) {
		this.data = [1]
		this.length = length
	}
	heaper(i) {
		let parent = null
		while (i > 1) {
			parent = Math.floor(i / 2)
			if (this.data[i] > this.data[parent]) {
				let temp = this.data[i]
				this.data[i] = this.data[parent]
				this.data[parent] = temp
			}
			i = parent
		}
	}
	add(n) {
		if (this.data.length - 1 < this.length) {
			this.data.push(n)
			this.heaper(this.data.length - 1)
		} else {
			this.data[1] = n
			let i = 1
			while (i <= this.length) {
				let center = this.data[i]
				let left = this.data[i * 2]
				let right = this.data[i * 2 + 1]
				if (left && left > center) {
					if (right && right > left) {
						// swap center & right
						let temp = this.data[i * 2 + 1]
						this.data[i * 2 + 1] = this.data[i]
						this.data[i] = temp
						i = i * 2 + 1
					} else {
						// swap center & left
						let temp = this.data[i * 2]
						this.data[i * 2] = this.data[i]
						this.data[i] = temp
						i = i * 2
					}
				} else {
					break
				}
			}
		}
	}
	isFull() {
		return this.data.length >= this.length + 1
	}
	peak() {
		return this.data[1] ? this.data[1] : Infinity
	}
}
function GetLeastNumbers_Solution(input, k) {
	if (k > input.length) return []
	if (k === 0) return []
	let heap = new Heap(k)
	input.map(n => {
		if (!heap.isFull() || n < heap.peak()) heap.add(n)
	})
	return heap.data.slice(1).sort((a, b) => a - b)
}
console.log(GetLeastNumbers_Solution([10, 23, 87, 3, 72, 9, 20, 58, 2], 0))
