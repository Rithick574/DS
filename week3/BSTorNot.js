class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function isValidBST(root) {
    let prev = null;

    // Helper function for in-order traversal
    function inOrder(node) {
        if (node == null) {
            return true;
        }

        // Traverse the left subtree
        if (!inOrder(node.left)) {
            return false;
        }

        // Check if the current node's value is greater than the previous node's value
        if (prev !== null && node.val <= prev.val) {
            return false;
        }

        // Update the previous node
        prev = node;

        // Traverse the right subtree
        return inOrder(node.right);
    }

    // Start the in-order traversal from the root
    return inOrder(root);
}

// Example usage:
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log("Is the tree a BST? ", isValidBST(root)); // Output: true
