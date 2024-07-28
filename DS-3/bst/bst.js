class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }
    
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(root.right===null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        if(root === null){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    //preorder

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    //inorder

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    //postOrder
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    //bfs
    levelOrder(){

        const queue =[]
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    //dfs
    dfsIterative(){
        if(this.root === null) return 
        const stack = []
        stack.push(this.root)
        while(stack.length > 0){
            const currentNode = stack.pop()
            console.log(currentNode.value);
            if(currentNode.right !== null){
                stack.push(currentNode.right)
            }
            if(currentNode.left !== null){
                stack.push(currentNode.left)
            }
        }
    }
    findClosesetValue(target){
        return this.findCloseset(this.root,target,this.root.value)
    }
    findCloseset(root, target,closest){
        if(root === null) return closest
        if(Math.abs(target - closest) > Math.abs(target - root.value)){
            closest = root.value
        }
        if(target < root.value){
            return this.findCloseset(root.left,target,closest)
        }else if(target > root.value){
            return this.findCloseset(root.right,target,closest)
        }else{ 
            return closest
        }
    }
}

const bst = new BinarySearchTree()
console.log('Is tree empty',bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)

bst.levelOrder()
// console.log("after deleting");
// bst.delete(10)
// bst.levelOrder()
console.log("DFS");
bst.dfsIterative();
console.log("Closest value to 3:");
console.log(bst.findClosesetValue(13))
