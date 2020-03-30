/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(p1, p2) {
	function isSubTree(t1, t2) {
		if (!p2) return true
		if (!p1) return false
		return (
			t1.val === t2.val &&
			isSameTree(t1.left, t2.left) &&
			isSameTree(t1.right, t2.right)
		)
	}
	if (!p1 || !p2) return false
	return (
		isSubTree(p1, p2) || HasSubtree(p1.left, p2) || HasSubtree(p1.right, p2)
	)
}
