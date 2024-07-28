class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BSTNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        let current = this.root;
        while (current !== null) {
            if (value === current.value) {
                return true;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    delete(value) {
        // Helper function to find the minimum value in the right subtree
        const findMin = (node) => {
            while (node.left !== null) {
                node = node.left;
            }
            return node;
        };

        const deleteNode = (node, value) => {
            if (node === null) {
                return null;
            }
            if (value < node.value) {
                node.left = deleteNode(node.left, value);
            } else if (value > node.value) {
                node.right = deleteNode(node.right, value);
            } else {
                if (node.left === null) {
                    return node.right;
                }
                if (node.right === null) {
                    return node.left;
                }
                const temp = findMin(node.right);
                node.value = temp.value;
                node.right = deleteNode(node.right, temp.value);
            }
            return node;
        };

        this.root = deleteNode(this.root, value);
    }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);

console.log("Search 7:", bst.search(7)); // true
console.log("Search 20:", bst.search(20)); // false

bst.delete(5);
console.log("Search 5 after deletion:", bst.search(5)); // false
