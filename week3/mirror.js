class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function newNode(data) {
    let node = new Node(data);
    return node;
}

function mirror(root) {
    if (root == null) {
        return;
    }

    let q = [];
    q.push(root);

    while (q.length > 0) {
        let curr = q[0];
        q.shift();

        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;

        if (curr.left != null) {
            q.push(curr.left);
        }
        if (curr.right != null) {
            q.push(curr.right);
        }
    }
}

function inOrder(node) {
    if (node == null) {
        return;
    }
    inOrder(node.left);
    console.log(node.data); // Use console.log for Node.js environment
    inOrder(node.right);
}

let root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);

console.log("Inorder traversal of the constructed tree is:");
inOrder(root);

// Create a new root for the mirrored tree
let mirroredRoot = Object.assign({}, root);

mirror(mirroredRoot);

console.log("Inorder traversal of the mirror tree is:");
inOrder(mirroredRoot);
