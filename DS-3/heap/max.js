// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }
//     isEmpty(){
//         return this.heap.length === 0;
//     }
 
//     buildHeap(arr){
//         this.heap = arr
//         for(let i= Math.floor(this.heap.length/2);i>=0;i--){
//             this.heapifyDown(i)
//         }
//     }

//     heapifyDown(index){
//         let leftchild = 2* index +1;
//         let rightchild = 2* index +2
//         let largest = index

//         if(leftchild < this.heap.length && this.heap[leftchild] > this.heap[largest]){
//             largest = leftchild
//         }
//         if(rightchild < this.heap.length && this.heap [rightchild] > this.heap[largest]){
//             largest = rightchild
//         }
//         if(largest !== index){
//             [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
//             this.heapifyDown(largest)
//         }
//     }
//     insert(value){
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1)
//     }
//     heapifyUp(index){
//         let parentIndex = Math.floor((index-1)/2)
//         while(index > 0 && this.heap[index] > this.heap[parentIndex]){
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
//             index = parentIndex
//             parentIndex = Math.floor((index -1)/2);
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.heap.length === 1){
//             return this.heap.pop()
//         }
//         const root = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return root
//     }
// }

// const maxHeap = new MaxHeap()
// maxHeap.buildHeap([4,3,5,2,8,6])
// console.log("Max Heap:",maxHeap.heap);

// maxHeap.insert(10)
// console.log("Max heap after insertion :",maxHeap.heap);

// const maxRemoved = maxHeap.remove()
// console.log("Max Heap after removal:", maxHeap.heap); 
//   console.log("Removed value from Max Heap:", maxRemoved); 





class MaxHeap{
    constructor(){
        this.heap = []
    }

    isEmpty(){
        return this.heap.length===0;
    }

    buildHeap(arr){
        this.heap = arr
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.heapifyDown(i)
        }
    }
    heapifyDown(index){
        let leftChildIndex = 2*index + 1;
        let rightChildIndex = 2*index +2
        let largest = index

        if(leftChildIndex < this.heap.length &&  this.heap[leftChildIndex]>this.heap[largest]){
            largest = leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex]> this.heap[largest]){
            largest = rightChildIndex
        }
        if(largest !== index){
            [this.heap[index],this.heap[largest]] = [this.heap[largest],this.heap[index]]
            this.heapifyDown(largest)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length -1)
    }
    heapifyUp(index){
        let parentIndex = Math.floor((index-1)/2)
        while(index >0 && this.heap[index] > this.heap[parentIndex]){
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }


    remove (){
        if(this.isEmpty()){
            return null;
        }
        if(this.heap.length ===1){
            return this.heap.pop()
        }
        const root= this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return root;
    }
}

const max = new MaxHeap()
max.buildHeap([2,3,1,4,8,5])
console.log("Max heap:",max.heap);

max.insert(9)
console.log("Max heap after insertion:",max.heap);
console.log("removed",max.remove());
// console.log("Max heap after removal:",max.heap);
// console.log("removed",max.remove());
// console.log("Max heap after removal:",max.heap);
// console.log("removed",max.remove());
// console.log("Max heap after removal:",max.heap);


























