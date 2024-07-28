class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            if (node.left === null) {
                node.left = newNode;
                return;
            } else if (node.right === null) {
                node.right = newNode;
                return;
            } else {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }

    preOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }

    postOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

// Example usage
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log("Pre-order Traversal:", tree.preOrderTraversal());
console.log("In-order Traversal:", tree.inOrderTraversal());
console.log("Post-order Traversal:", tree.postOrderTraversal());
