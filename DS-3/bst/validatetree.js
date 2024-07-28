class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;  // Corrected assignment operator
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if(root.right === null){
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    isBST(){
        return this.validateBST(this.root, -Infinity, Infinity);
    }

    validateBST(node, min, max){
        if(node === null){
            return true;
        }
        if(node.value <= min || node.value >= max){
            return false;
        }
        return this.validateBST(node.left, min, node.value) && this.validateBST(node.right, node.value, max);
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
console.log("Is the tree a valid BST?");
console.log(bst.isBST());  // Should print true

// Adding a node that violates the BST property
bst.root.left.right = new Node(20);  // This will violate the BST property

console.log("Is the tree a valid BST?");
console.log(bst.isBST());  // Should print false
