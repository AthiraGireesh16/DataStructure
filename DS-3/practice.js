//BST


// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left === null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//         this.inOrder(root.left)
//         console.log(root.value);
//         this.inOrder(root.right)

//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(this.root);
//         }
//     }

//     levelOrder(){
//         const queue =[]
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }


//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
// }


// const bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.levelOrder()
// console.log("Inoreder");
// console.log(bst.inOrder(bst.root));

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root));



//MinHeap

class MinHeap{
    constructor(){
        this.heap =[]
    }
    isEmpty(){
        return this.heap.length === 0
    }
    heapBuild(arr){
        this.heap = arr
        for(let i=Math.floor(this.heap.length/2)-1 ; i>=0;i--){
            this.heapifydown(i)
        }
    }
    heapifydown(index){
        let leftChildIndex = 2*index +1
        let rightChildIndex = 2*index+2
        let smallest = index
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
            smallest = leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]){
            smallest = rightChildIndex
        }
        if(smallest !== index){
            [this.heap[index],this.heap[i]] = [this.heap[i],this.heap[index]]
            this.heapifydown(smallest)
        }
    }

    insert(value){
        this.heap(value)
        this.heapifyUp(this.heap.length -1)
    }

    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        while(index > 0 && this.heap[index] < this.heap[parentIndex])
    }
}


