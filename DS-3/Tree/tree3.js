class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Utility function to get the height of a node
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Utility function to get the balance factor of a node
    getBalance(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Right rotation
    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        return x;
    }

    // Left rotation
    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        return y;
    }

    // Insert a node into the AVL tree
    insert(value, node = this.root) {
        if (!node) {
            return new AVLNode(value);
        }

        if (value < node.value) {
            node.left = this.insert(value, node.left);
        } else if (value > node.value) {
            node.right = this.insert(value, node.right);
        } else {
            return node;
        }

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        const balance = this.getBalance(node);

        if (balance > 1 && value < node.left.value) {
            return this.rightRotate(node);
        }
        if (balance < -1 && value > node.right.value) {
            return this.leftRotate(node);
        }
        if (balance > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
        if (balance < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }
}

// Example usage
const avl = new AVLTree();
avl.root = avl.insert(10);
avl.root = avl.insert(20);
avl.root = avl.insert(30);
avl.root = avl.insert(40);
avl.root = avl.insert(50);
avl.root = avl.insert(25);

console.log("AVL Tree created with rotations.");
